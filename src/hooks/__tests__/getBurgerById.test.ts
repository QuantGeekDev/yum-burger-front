import { renderHook } from "@testing-library/react";
import useBurgersApi from "../useBurgerApi";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/errorHandlers";

describe("Given a useBurgerApi's getBurgerById method", () => {
  describe("When it receives a request to get burger with id '6567d60e9fbd027bb1696969'", () => {
    test("Then it should return a classic burger", async () => {
      const classicBurgerId = "6567d60e9fbd027bb1696969";
      const classicBurgerName = "Classic Burger";
      const {
        result: {
          current: { getBurgerById },
        },
      } = renderHook(() => useBurgersApi());

      const { burger } = await getBurgerById(classicBurgerId);

      expect(burger).toHaveProperty("name", classicBurgerName);
    });
  });

  describe("When it encounters an error getting the burger by ID", () => {
    test("Then it should throw a new error 'Error getting burger by id from API'", async () => {
      server.use(...errorHandlers);

      const expectedErrorMessage = "Error getting burger by id from API";
      const classicBurgerId = "6567d60e9fbd027bb1696969";
      const {
        result: {
          current: { getBurgerById },
        },
      } = renderHook(() => useBurgersApi());

      expect(getBurgerById(classicBurgerId)).rejects.toThrow(
        expectedErrorMessage,
      );
    });
  });
});
