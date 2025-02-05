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

export const CharactersList = ({ navigation }) => {
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<TCharacter[]>([]);

  const {
    data: charactersData,
    error: charactersError,
    isLoading: isCharactersLoading,
    isFetching: isCharactersFetching,
  } = useGetCharactersQuery({
    page,
    species: "all",
    status: "all",
  });

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
    return <ActivityIndicator size="large" color="#0000ff" />;
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
