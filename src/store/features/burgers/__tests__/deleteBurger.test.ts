import { burgersMock, classicBurgerMock } from "../mocks/burgersMock";
import burgersReducer, { deleteBurgerActionCreator } from "../burgersSlice";
import { BurgersStateStructure, MongooseBurgerStructure } from "../types";

describe("Given a burgerSlice's deleteBurger method", () => {
  describe("When it receives an array with Classic Burger and Cheese Burger and the action to delete the Classic Burger", () => {
    test("Then it should return an array without Classic Burger", () => {
      const classicBurgerId = classicBurgerMock._id;
      const initialState: BurgersStateStructure = {
        burgers: burgersMock,
        selectedBurger: {} as MongooseBurgerStructure,
      };
      const deleteClassicBurgerAction =
        deleteBurgerActionCreator(classicBurgerId);

      expect(initialState.burgers).toContain(classicBurgerMock);

      const { burgers: newBurgers } = burgersReducer(
        initialState,
        deleteClassicBurgerAction,
      );

      expect(newBurgers).not.toContain(classicBurgerMock);
    });
  });
});
