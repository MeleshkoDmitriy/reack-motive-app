import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CHARACTERS_URL } from "@/constants/api";
import { createQueryString } from "@/utils/createQueryString";
import {
  TCharacter,
  TCharacterRequest,
  TCharacterResponse,
} from "@/types/CharacterTypes";

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: CHARACTERS_URL }),
  keepUnusedDataFor: 20,
  tagTypes: ["Characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query<TCharacterResponse, TCharacterRequest>({
      query: ({ page, species, status }) => {
        const queryString = createQueryString(page, species, status);
        return `character/?${queryString}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ id }) => ({
                type: "Characters" as const,
                id,
              })),
              { type: "Characters", id: "LIST" },
            ]
          : [{ type: "Characters", id: "LIST" }],
    }),
    getCharacterById: builder.query<TCharacter, string>({
      query: (id) => `character/${id}`,
      providesTags: (result, error, id) =>
        result ? [{ type: "Characters", id }] : [],
    }),
  }),
});

export const { useGetCharactersQuery, useLazyGetCharacterByIdQuery } = charactersApi;
