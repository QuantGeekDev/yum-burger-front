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
    deleteBurger: (
      currentState,
      action: PayloadAction<string>,
    ): BurgersStateStructure => {
      const burgerId = action.payload;
      return {
        ...currentState,
        burgers: currentState.burgers.filter(
          (burger) => burgerId != burger._id,
        ),
      };
    },
  },
});

export default burgersSlice.reducer;

export const {
  loadBurgers: loadBurgersActionCreator,
  deleteBurger: deleteBurgerActionCreator,
} = burgersSlice.actions;
