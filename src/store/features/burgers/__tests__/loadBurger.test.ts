import { loadBurgerActionCreator } from "../burgersSlice";
import { cheeseBurgerMock } from "../mocks/burgersMock";
import burgersReducer from "../burgersSlice";
import { BurgersStateStructure, MongooseBurgerStructure } from "../types";

describe("Given a burgerSlice's loadBurger method", () => {
  describe("When it receives an empty state with the action to load a Cheeseburger", () => {
    test("Then it should return a new state with a Cheeseburger", () => {
      const initialState = {
        burgers: [],
        selectedBurger: {} as MongooseBurgerStructure,
      };
      const loadBurgerAction = loadBurgerActionCreator(cheeseBurgerMock);
      const newState = burgersReducer(
        initialState as BurgersStateStructure,
        loadBurgerAction,
      );

      expect(newState.selectedBurger).toContain(cheeseBurgerMock);
    });
  });
});
