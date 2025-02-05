import { TThemeMode } from "@/types/ThemeTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadThemeFromStorage = createAsyncThunk(
  "theme/loadThemeFromStorage",
  async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("themeMode");
      if (savedTheme) {
        return savedTheme as TThemeMode;
      }

      return "light";
    } catch (error) {
      console.error("Failed to load theme from AsyncStorage", error);
      return "light";
    }
  }
);

interface IInitialState {
  themeMode: TThemeMode;
}

const initialState: IInitialState = {
  themeMode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === "light" ? "dark" : "light";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadThemeFromStorage.fulfilled, (state, action) => {
      state.themeMode = action.payload;
    });
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export const selectTheme = (state: { theme: IInitialState }) =>
  state.theme.themeMode;

export default themeSlice.reducer;
