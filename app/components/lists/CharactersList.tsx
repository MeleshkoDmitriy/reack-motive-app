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

export const CharactersList = ({ navigation }) => {
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
  } = useCharacters(selectedSpecies, selectedStatus);

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
              onPress={() =>
                navigation.navigate(routesStack.PROFILE, { ...item })
              }
            />
          )}
          onEndReached={loadMoreCharacters}
          onEndReachedThreshold={0.5}
          ListFooterComponent={isFetching ? <Spinner /> : null}
          ItemSeparatorComponent={CharacterSeparator}
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
                onPress={() =>
                  navigation.navigate(routesStack.PROFILE, { ...item })
                }
              />
            )}
            onEndReached={loadMoreCharacters}
            onEndReachedThreshold={0.5}
            ListFooterComponent={isFetching ? <Spinner /> : null}
            ItemSeparatorComponent={CharacterSeparator}
          />
        </>
      )}
      
    </View>
  );
};
