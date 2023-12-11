import { renderHook } from "@testing-library/react";
import { server } from "../../mocks/node";
import useBurgersApi from "../useBurgerApi";
import { veganBurgerMock } from "../../store/features/burgers/mocks/burgersMock";
import { errorHandlers } from "../../mocks/errorHandlers";

beforeEach(() => {
  server.resetHandlers();
});

describe("Given a useBurgerApi's addBurger method", () => {
  describe("When it receives a request to add a Vegan Burger", () => {
    test("Then it should return the added burgers", async () => {
      const {
        result: {
          current: { addBurger },
        },
      } = renderHook(useBurgersApi);

      const burger = await addBurger(veganBurgerMock);

      expect(burger).toStrictEqual({ burger: veganBurgerMock });
    });
  });

  describe("When it encounters an error handling a request", () => {
    test("Then it should throw a new error 'Error adding burger to API' ", async () => {
      const expectedErrorMessage = "Error adding burger to API";

      server.use(...errorHandlers);

      const {
        result: {
          current: { addBurger },
        },
      } = renderHook(useBurgersApi);

      await expect(() => addBurger(veganBurgerMock)).rejects.toThrow(
        expectedErrorMessage,
      );
    });
  });
});
