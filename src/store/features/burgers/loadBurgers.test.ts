import burgersReducer, {
  loadBurgersActionCreator,
  initialBurgersState,
} from "./burgersSlice";
import { cheeseBurgerMock, classicBurgerMock } from "./mocks/burgersMock";
import { BurgersStateStructure } from "./types";

describe("Given a loadBurgers reducer", () => {
  describe("When it receives an initial state and a request to load Classic Burger and Cheese Burger", () => {
    test("Then it returns a state with Classic Burger and Cheese Burger", () => {
      const loadBurgersAction = loadBurgersActionCreator([
        classicBurgerMock,
        cheeseBurgerMock,
      ]);

      const newState: BurgersStateStructure = burgersReducer(
        initialBurgersState,
        loadBurgersAction,
      );

      const { burgers } = newState;

      expect(burgers).toContain(classicBurgerMock);

      expect(burgers).toContain(cheeseBurgerMock);
    });
  });
});
