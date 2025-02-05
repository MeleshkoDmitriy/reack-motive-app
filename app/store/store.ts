import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { charactersApi } from "./slices/api/characterApi";
import filterSlice from "./slices/filterSlice";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    filter: filterSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
