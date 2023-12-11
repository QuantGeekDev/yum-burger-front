import { renderHook } from "@testing-library/react";
import useBurgersApi from "../useBurgerApi";
import { classicBurgerMock } from "../../store/features/burgers/mocks/burgersMock";

describe("Given a useBurgerApi's getBurgerById method", () => {
  describe("When it receives a request to get burger with id '6567d60e9fbd027bb1696969'", () => {
    test("Then it should return a classic burger", async () => {
      const classicBurgerId = "6567d60e9fbd027bb1696969";
      const {
        result: {
          current: { getBurgerById },
        },
      } = renderHook(() => useBurgersApi());

      const expectedClassicBurger = await getBurgerById(classicBurgerId);

      expect(expectedClassicBurger).toHaveProperty(
        "name",
        classicBurgerMock.name,
      );
    });
  });
});
