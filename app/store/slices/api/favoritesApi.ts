import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FAVORITES_URL } from "@/constants/api";
import { TFavorite } from "@/types/FavoritesTypes";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: FAVORITES_URL }),
  keepUnusedDataFor: 20,
  tagTypes: ["favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query<TFavorite[], string | void>({
      query: (name) => {
        return name ? `?name=${name}` : "";
      },
      providesTags: ["favorites"],
    }),
    addFavorite: builder.mutation<TFavorite, Partial<TFavorite>>({
      query: (newFavorite) => ({
        url: "/",
        method: "POST",
        body: newFavorite,
      }),
      invalidatesTags: ["favorites"],
    }),
    deleteFavorite: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["favorites"],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} = favoritesApi;
