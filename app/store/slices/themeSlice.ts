import { TThemeMode } from "@/types/ThemeTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadThemeFromStorage = createAsyncThunk<
  TThemeMode,
  undefined,
  { rejectValue: string }
>("theme/loadThemeFromStorage", async (_, { rejectWithValue }) => {
  try {
    const savedTheme = await AsyncStorage.getItem("themeMode");
    if (savedTheme) {
      return savedTheme as TThemeMode;
    }
    return "light";
  } catch (error) {
    console.error("Failed to load theme from AsyncStorage", error);
    return rejectWithValue("Failed to load theme");
  }
});

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
