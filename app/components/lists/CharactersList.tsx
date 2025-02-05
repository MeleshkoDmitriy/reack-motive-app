import { routesStack } from "@/navigation/routes";
import { useGetCharactersQuery } from "@/store/slices/api/characterApi";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CharacterCard } from "../cards/CharacterCard";
import { TCharacter } from "@/types/CharacterTypes";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectSpecies, selectStatus } from "@/store/slices/filterSlice";
import { CharacterSeparator } from "../separators/CharacterSeparator";

export const CharactersList = ({ navigation }) => {
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<TCharacter[]>([]);

  const selectedSpecies = useAppSelector(selectSpecies);
  const selectedStatus = useAppSelector(selectStatus);

  const {
    data: charactersData,
    error: charactersError,
    isLoading: isCharactersLoading,
    isFetching: isCharactersFetching,
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
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...charactersData.results,
      ]);
    }
  }, [charactersData]);

  const loadMoreCharacters = useCallback(() => {
    if (
      !isCharactersLoading &&
      !isCharactersFetching &&
      charactersData?.info?.next
    ) {
      setPage((prev) => prev + 1);
    }
  }, [isCharactersLoading, isCharactersFetching, charactersData]);

  if (isCharactersLoading && characters.length === 0) {
    return <ActivityIndicator />;
  }

  if (charactersError) {
    return <Text>Ошибка загрузки данных</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            item={item}
            onPress={() =>
              navigation.navigate(routesStack.PROFILE, { ...item })
            }
          />
        )}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isCharactersFetching ? <ActivityIndicator /> : null
        }
        ItemSeparatorComponent={CharacterSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
  },
});
