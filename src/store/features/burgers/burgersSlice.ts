import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type BurgerStructure } from "./types";

const burgersSlice = createSlice({
  name: "burgersState",

  initialState: [],

  reducers: {
    loadBurgers: (currentState, action: PayloadAction<BurgerStructure[]>) => ({
      ...currentState,
      burgers: action.payload,
    }),
  },
});

export default burgersSlice.reducer;

export const { loadBurgers: loadBurgersActionCreator } = burgersSlice.actions;
