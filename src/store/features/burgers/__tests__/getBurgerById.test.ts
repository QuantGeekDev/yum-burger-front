import { getBurgerByIdActionCreator } from "../burgersSlice";
import burgersReducer from "../burgersSlice";
import {
  editedCheeseBurgerMock,
  classicBurgerMock,
} from "../mocks/burgersMock";
import { MongooseBurgerStructure } from "../types";

describe("Given a burgersSlice's getBurgerById reducer", () => {
  describe("When it receives an array with classic burger and cheese burger with the action to find cheese burger by it's ID", () => {
    test("Then it should return an array with cheese burger", () => {
      const cheeseBurgerId = "6567d60e9fbd027bb1d9d722";
      const initialState = [editedCheeseBurgerMock, classicBurgerMock];
      const getCheeseBurgerAction = getBurgerByIdActionCreator(cheeseBurgerId);
      const newState = burgersReducer(
        {
          burgers: initialState,
          selectedBurger: {} as MongooseBurgerStructure,
        },
        getCheeseBurgerAction,
      );
      expect(newState.burgers).toContain(editedCheeseBurgerMock);
    });
  });
});
