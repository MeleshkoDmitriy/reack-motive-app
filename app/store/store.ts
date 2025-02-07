import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { charactersApi } from "./slices/api/characterApi";
import filterSlice from "./slices/filterSlice";
import themeSlice from "./slices/themeSlice";
import { favoritesApi } from "./slices/api/favoritesApi";

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    filter: filterSlice,
    theme: themeSlice,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      charactersApi.middleware,
      favoritesApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
