import burgersReducer, { addBurgerActionCreator } from "../burgersSlice";
import { editedCheeseBurgerMock, veganBurgerMock } from "../mocks/burgersMock";

describe("Given a burgerSlice's addBurger reducer", () => {
  describe("When it receives a vegan burger and the action to add the burger to the burger state", () => {
    test("Then it should return a new state with the vegan burger in it", () => {
      const initialBurgersState = {
        burgers: [],
        selectedBurger: editedCheeseBurgerMock,
      };
      const addBurgerAction = addBurgerActionCreator(veganBurgerMock);

      const { selectedBurger } = burgersReducer(
        initialBurgersState,
        addBurgerAction,
      );

      expect(selectedBurger).toContain(veganBurgerMock);
    });
  });
});
