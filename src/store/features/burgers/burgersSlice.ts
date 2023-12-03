import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BurgersStateStructure, type BurgerStructure } from "./types";

export const initialBurgersState: BurgersStateStructure = {
  burgers: [],
};

const burgersSlice = createSlice({
  name: "burgersState",

  initialState: initialBurgersState,

  reducers: {
    loadBurgers: (currentState, action: PayloadAction<BurgerStructure[]>) => ({
      ...currentState,
      burgers: action.payload,
    }),
  },
});

export default burgersSlice.reducer;

export const { loadBurgers: loadBurgersActionCreator } = burgersSlice.actions;
