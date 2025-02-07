import { useGetCharactersQuery } from "@/store/slices/api/characterApi";
import {
  TCharacter,
  TFilterCharacterSpecies,
  TFilterCharacterStatus,
} from "@/types/CharacterTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useOnline } from "./useOnline";
import { useGetFavoritesQuery } from "@/store/slices/api/favoritesApi";

export const useCharacters = (
  selectedSpecies: TFilterCharacterSpecies,
  selectedStatus: TFilterCharacterStatus
) => {
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [offlineCharacters, setOfflineCharacters] = useState<TCharacter[]>([]);
  const [page, setPage] = useState(1);
  const { isOnline } = useOnline();

  const {
    data: charactersData,
    error: charactersError,
    isLoading,
    isFetching,
    refetch: refetchGetCharacters
  } = useGetCharactersQuery({
    page,
    species: selectedSpecies,
    status: selectedStatus,
  });

  useEffect(() => {
    setPage(1);
    setCharacters([]);
  }, [selectedSpecies, selectedStatus]);

  useEffect(() => {
    if (charactersData && charactersData.results) {
      setCharacters((prev) => [...prev, ...charactersData.results]);
      saveCharactersToStorage(charactersData.results);
    }
  }, [charactersData]);

  const saveCharactersToStorage = async (newCharacters: TCharacter[]) => {
    try {
      const storedCharacters = await AsyncStorage.getItem("characters");
      const charactersArray = storedCharacters
        ? JSON.parse(storedCharacters)
        : [];

      const updatedCharacters = [...charactersArray, ...newCharacters].slice(
        -10
      );
      await AsyncStorage.setItem(
        "characters",
        JSON.stringify(updatedCharacters)
      );
    } catch (e) {
      console.error("Failed to save characters locally:", e);
    }
  };

  const loadOfflineCharacters = async () => {
    try {
      const storedCharacters = await AsyncStorage.getItem("characters");
      if (storedCharacters) {
        setOfflineCharacters(JSON.parse(storedCharacters));
      }
    } catch (e) {
      console.error("Failed to load characters from local storage:", e);
    }
  };

  const loadMoreCharacters = () => {
    if (!isLoading && !isFetching && charactersData?.info?.next) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const checkOnlineStatus = async () => {
      const state = await NetInfo.fetch();
      if (!state.isConnected) {
        loadOfflineCharacters();
      }
    };

    checkOnlineStatus();
  }, [isOnline]);

  return {
    characters,
    offlineCharacters,
    charactersError,
    isLoading,
    isFetching,
    loadMoreCharacters,
    loadOfflineCharacters,
    isOnline,
    refetchGetCharacters,
  };
};
