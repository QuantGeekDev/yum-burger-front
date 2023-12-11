import burgersReducer, { addBurgerActionCreator } from "../burgersSlice";
import { veganBurgerMock } from "../mocks/burgersMock";
import { BurgersStateStructure } from "../types";

describe("Given a burgerSlice's addBurger reducer", () => {
  describe("When it receives a vegan burger and the action to add the burger to the burger state", () => {
    test("Then it should return a new state with the vegan burger in it", () => {
      const initialBurgersState = { burgers: [] };
      const addBurgerAction = addBurgerActionCreator(veganBurgerMock);

      const { burgers } = burgersReducer(
        initialBurgersState as BurgersStateStructure,
        addBurgerAction,
      );

      expect(burgers).toContain(veganBurgerMock);
    });
  });
});
