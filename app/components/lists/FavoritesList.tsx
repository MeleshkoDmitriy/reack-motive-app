import { FlatList, StyleSheet, View } from "react-native";
import { FavoriteCard } from "../cards/FavoriteCard";
import { Spinner } from "../shared/spinners/Spinner";
import { ErrorStatus } from "../statuses/ErrorStatus";
import { FooterList } from "./FooterList";
import { EmptyList } from "./EmptyList";
import { styleVariables } from "@/styles/variables";
import { FC, useCallback, useState } from "react";
import { useFavorites } from "@/hooks/useFavorites";

interface FavoritesListProps {
  searchValue: string;
}

export const FavoritesList: FC<FavoritesListProps> = ({ searchValue }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { data, refetch, isFetching, isLoading, error, defineLike } =
    useFavorites(searchValue);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  }, [refetch]);

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
          <FavoriteCard item={item} isLiked={defineLike(item.id)} />
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListFooterComponent={<FooterList />}
        ListEmptyComponent={searchValue !== "" ? <EmptyList title="No characters found!" /> :<EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: styleVariables.gaps.g20,
  },
});
