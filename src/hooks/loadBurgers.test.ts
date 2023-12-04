import {
  cheeseBurgerMock,
  classicBurgerMock,
} from "../store/features/burgers/mocks/burgersMock";
import useApi from "./useApi";

describe("Given a useApi hook's loadBurgers method", () => {
  describe("When it is called with a request for burgers", () => {
    test("Then it should return an array with a Classic Burger and a Cheese Burger", async () => {
      const { loadBurgers } = useApi();
      const burgers = await loadBurgers();

      expect(burgers[0]).toEqual(classicBurgerMock);
      expect(burgers[1]).toEqual(cheeseBurgerMock);
    });
  });
});
