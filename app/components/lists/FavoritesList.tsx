import { FlatList, StyleSheet, View } from "react-native";
import { FavoriteCard } from "../cards/FavoriteCard";
import { Spinner } from "../shared/spinners/Spinner";
import { ErrorStatus } from "../statuses/ErrorStatus";
import { FooterList } from "./FooterList";
import { EmptyList } from "./EmptyList";
import { styleVariables } from "@/styles/variables";
import { useGetFavoritesQuery } from "@/store/slices/api/favoritesApi";

export const FavoritesList = () => {
  const { data, isLoading, isFetching, error } = useGetFavoritesQuery("rick", {
    refetchOnFocus: true,
    pollingInterval: 10000,
  });

  if (isLoading || isFetching) {
    return (
      <View style={styles.wrapper}>
        <Spinner />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.wrapper}>
        <ErrorStatus />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FavoriteCard
            item={item}
            // onPress={}
          />
        )}
        ListFooterComponent={<FooterList />}
        // ItemSeparatorComponent={CharacterSeparator}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: styleVariables.gaps.g20,
  },
});
