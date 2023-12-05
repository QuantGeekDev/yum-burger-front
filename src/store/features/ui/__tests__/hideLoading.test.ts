import { hideLoadingActionCreator, showLoadingActionCreator } from "../uiSlice";
import uiReducer from "../uiSlice";
import { defaultUiStateMock } from "./mocks/UiMocks";

describe("Given a UiSlice's hideLoading reducer", () => {
  describe("When it receives a state with the action to show loading", () => {
    test("Then it should return a new state with the isLoading property set to true", () => {
      const expectedIsLoading = true;

      const showLoadingAction = showLoadingActionCreator();

      const newUiState = uiReducer(defaultUiStateMock, showLoadingAction);

      expect(newUiState.isLoading).toBe(expectedIsLoading);
    });
  });
  describe("When it receives a state with isLoading set to true and an action to hide loading ", () => {
    test("Then it should return a new state with the isLoading property set to false", () => {
      const expectedIsLoading = false;

      const hideLoadingAction = hideLoadingActionCreator();

      const newUiState = uiReducer({ isLoading: false }, hideLoadingAction);

      expect(newUiState.isLoading).toBe(expectedIsLoading);
    });
  });
});
