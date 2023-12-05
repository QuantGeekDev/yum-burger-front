import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
};

export const UiSlice = createSlice({
  name: "uiState",
  initialState: initialUiState,
  reducers: {
    hideLoading: (currentState) => ({
      ...currentState,
      isLoading: false,
    }),
    showLoading: (currentState) => ({
      ...currentState,
      isLoading: true,
    }),
  },
});

export default UiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = UiSlice.actions;
