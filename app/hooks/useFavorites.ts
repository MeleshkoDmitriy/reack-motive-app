import { useGetFavoritesQuery } from "@/store/slices/api/favoritesApi";

export const useFavorites = (searchString: string = "") => {
  const { data, isLoading, isFetching, error, refetch } = useGetFavoritesQuery(
    searchString,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );

  const defineLike = (id: number) => {
    return data ? data?.some((favorite) => favorite.id === id) : false;
  };

  return {
    data,
    isLoading,
    isFetching,
    error,
    refetch,
    defineLike,
  };
};
