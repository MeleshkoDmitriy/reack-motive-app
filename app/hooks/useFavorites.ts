import { useLazyGetCharacterByIdQuery } from "@/store/slices/api/characterApi";
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} from "@/store/slices/api/favoritesApi";

export const useFavorites = (searchString: string = "") => {
  const { data, isLoading, isFetching, error, refetch } = useGetFavoritesQuery(
    searchString,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      // pollingInterval: 20000,
    }
  );
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();
  const [getLazyCharacterById] = useLazyGetCharacterByIdQuery();

  const defineLike = (id: number) => {
    return data ? data?.some((favorite) => favorite.id === id) : false;
  };

  const favoriteCounter = data ? data.length : undefined;

  return {
    data,
    isLoading,
    isFetching,
    error,
    refetch,
    defineLike,
    addFavorite,
    deleteFavorite,
    getLazyCharacterById,
    favoriteCounter
  };
};
