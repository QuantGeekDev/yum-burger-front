import { cheeseBurgerMock } from "../mocks/burgersMock";
import { replaceBurgerByIdActionCreator } from "../burgersSlice";
import burgersReducer from "../burgersSlice";

describe("Given a burgersSlice's replaceBurgerById method", () => {
  describe("When it receives an array with a cheeseburger with the action to replace the cheeseburger with a cheeseburger with price 100", () => {
    test("Then it should return a cheeseburger with price 100", () => {
      const expectedBurgerPrice = 100;
      const cheeseBurgerArray = [cheeseBurgerMock];

      const newCheeseburger = cheeseBurgerMock;
      newCheeseburger.price = 100;

      const replaceByIdAction = replaceBurgerByIdActionCreator(newCheeseburger);
      const newBurgerState = burgersReducer(
        { burgers: cheeseBurgerArray },
        replaceByIdAction,
      );

      expect(newBurgerState.burgers[0]).toHaveProperty(
        "price",
        expectedBurgerPrice,
      );
    });
  });
});
