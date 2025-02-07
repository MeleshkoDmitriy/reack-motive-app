import { routesStack } from "@/navigation/routes";
import { FlatList, View } from "react-native";
import { CharacterCard } from "../cards/CharacterCard";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectSpecies, selectStatus } from "@/store/slices/filterSlice";
import { CharacterSeparator } from "../separators/CharacterSeparator";
import { Spinner } from "../shared/spinners/Spinner";
import { OfflineStatus } from "../statuses/OfflineStatus";
import { useCharacters } from "@/hooks/useCharacters";
import { ErrorStatus } from "../statuses/ErrorStatus";
import { EmptyList } from "./EmptyList";
import { FooterList } from "./FooterList";
import { FC, useCallback, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { CharacterStackParamList } from "@/navigation/Navigation";
import { useFavorites } from "@/hooks/useFavorites";

interface CharactersListProps {
  navigation: StackNavigationProp<CharacterStackParamList, "CHARACTERS">;
}

export const CharactersList: FC<CharactersListProps> = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const selectedSpecies = useAppSelector(selectSpecies);
  const selectedStatus = useAppSelector(selectStatus);
  const {
    characters,
    offlineCharacters,
    charactersError,
    isLoading,
    isFetching,
    loadMoreCharacters,
    loadOfflineCharacters,
    isOnline,
    refetchGetCharacters,
  } = useCharacters(selectedSpecies, selectedStatus);

  useEffect(() => {
    refetchGetCharacters();
  }, [isRefreshing])

  const { defineLike } = useFavorites();

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await refetchGetCharacters();
    setIsRefreshing(false);
  }, [refetchGetCharacters]);

  if (isLoading && characters.length === 0 && isOnline) {
    return <Spinner />;
  }

  if (charactersError && isOnline && offlineCharacters.length <= 0) {
    return <ErrorStatus />;
  }

  return (
    <View>
      {isOnline ? (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CharacterCard
              item={item}
              isLiked={defineLike(item.id)}
              onPress={() => navigation.navigate(routesStack.PROFILE, item)}
            />
          )}
          onEndReached={loadMoreCharacters}
          onEndReachedThreshold={0.5}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          ListFooterComponent={isFetching ? <Spinner /> : <FooterList />}
          ItemSeparatorComponent={CharacterSeparator}
          ListEmptyComponent={EmptyList}
        />
      ) : (
        <>
          <OfflineStatus onPress={loadOfflineCharacters} />
          <FlatList
            data={offlineCharacters}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CharacterCard
                item={item}
                isLiked={defineLike(item.id)}
                onPress={() => navigation.navigate(routesStack.PROFILE, item)}
              />
            )}
            onEndReached={loadMoreCharacters}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isFetching ? <Spinner /> : <FooterList />}
            ItemSeparatorComponent={CharacterSeparator}
            ListEmptyComponent={EmptyList}
          />
        </>
      )}
    </View>
  );
};
