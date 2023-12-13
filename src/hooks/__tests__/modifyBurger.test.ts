import { renderHook } from "@testing-library/react";
import useBurgersApi from "../useBurgerApi";
import { editedCheeseBurgerMock } from "../../store/features/burgers/mocks/burgersMock";
import { providerWrapper } from "../../testUtils/providerWrapper";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/errorHandlers";

beforeEach(() => server.resetHandlers());

describe("Given a useBurgerApi's modifyBurger method", () => {
  const {
    result: {
      current: { modifyBurger },
    },
  } = renderHook(() => useBurgersApi(), { wrapper: providerWrapper });

  describe("When it is called with a request to edit a cheeseburger to have price 10", () => {
    test("Then it should return a cheeseburger with price 10", async () => {
      const expectedCheeseBurgerPrice = 10;

      const modifiedCheeseBurger = await modifyBurger(editedCheeseBurgerMock);

      expect(modifiedCheeseBurger.price).toBe(expectedCheeseBurgerPrice);
    });
  });

  describe("When it encounters an error", () => {
    test("Then it should throw a new error", async () => {
      server.use(...errorHandlers);

      expect(modifyBurger(editedCheeseBurgerMock)).rejects.toThrow(
        "Error modifying burger from API",
      );
    });
  });
});
