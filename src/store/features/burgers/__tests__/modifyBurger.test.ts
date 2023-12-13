import { modifyBurgerActionCreator } from "../burgersSlice";
import { cheeseBurgerMock, editedCheeseBurgerMock } from "../mocks/burgersMock";
import burgerReducer from "../burgersSlice";
import { BurgersStateStructure, MongooseBurgerStructure } from "../types";

describe("Given a modifyBurger reducer", () => {
  describe("When it receives an initial state with a Classic Burger and the action to modify the cheeseburger price to 10", () => {
    test("Then it should return a new state with a Classic Burger that has price 10", () => {
      const expectedPrice = 10;

      const initialBurgersState: BurgersStateStructure = {
        burgers: [cheeseBurgerMock],
        selectedBurger: {} as MongooseBurgerStructure,
      };

      const modifyBurgerAction = modifyBurgerActionCreator(
        editedCheeseBurgerMock,
      );

      const newState = burgerReducer(initialBurgersState, modifyBurgerAction);

      const actualBurgerPrice = newState.burgers[0].price;

      expect(actualBurgerPrice).toBe(expectedPrice);
    });
  });
});
