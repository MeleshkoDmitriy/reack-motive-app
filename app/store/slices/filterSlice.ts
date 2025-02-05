import {
  TFilterCharacterSpecies,
  TFilterCharacterStatus,
} from "@/types/CharacterTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  species: TFilterCharacterSpecies;
  status: TFilterCharacterStatus;
}

const initialState: IInitialState = {
  species: "all",
  status: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSpecies(state, action: PayloadAction<TFilterCharacterSpecies>) {
      state.species = action.payload;
    },
    setStatus(state, action: PayloadAction<TFilterCharacterStatus>) {
      state.status = action.payload;
    },
    resetFilters(state) {
      state.species = "all";
      state.status = "all";
    },
  },
});

export const selectSpecies = (state: { filter: IInitialState }) =>
  state.filter.species;
export const selectStatus = (state: { filter: IInitialState }) =>
  state.filter.status;

export const { setSpecies, setStatus, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
