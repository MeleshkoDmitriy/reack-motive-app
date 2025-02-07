import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CHARACTERS_URL } from '@/constants/api';
import { createQueryString } from '@/utils/createQueryString';
import { TCharacterRequest, TCharacterResponse } from '@/types/CharacterTypes';

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: CHARACTERS_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<TCharacterResponse, TCharacterRequest>({
      query: ({ page, species, status }) => {
        const queryString = createQueryString(page, species, status);
        return `character/?${queryString}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
