import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BurgersStateStructure, type MongooseBurgerStructure } from "./types";

export const initialBurgersState: BurgersStateStructure = {
  burgers: [],
};

const burgersSlice = createSlice({
  name: "burgersState",

  initialState: initialBurgersState,

  reducers: {
    loadBurgers: (
      currentState,
      action: PayloadAction<MongooseBurgerStructure[]>,
    ) => ({
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
    addBurger: (
      currentState,
      action: PayloadAction<MongooseBurgerStructure>,
    ): BurgersStateStructure => {
      const newBurger = action.payload;
      return {
        ...currentState,
        burgers: [...currentState.burgers, newBurger],
      };
    },
  },
});

export default burgersSlice.reducer;

export const {
  loadBurgers: loadBurgersActionCreator,
  deleteBurger: deleteBurgerActionCreator,
  addBurger: addBurgerActionCreator,
} = burgersSlice.actions;
