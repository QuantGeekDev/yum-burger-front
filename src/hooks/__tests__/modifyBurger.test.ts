import { renderHook } from "@testing-library/react";
import useBurgersApi from "../useBurgerApi";
import { editedCheeseBurgerMock } from "../../store/features/burgers/mocks/burgersMock";
import { providerWrapper } from "../../testUtils/providerWrapper";

describe("Given a useBurgerApi's modifyBurger method", () => {
  describe("When it is called with a request to edit a cheeseburger to have price 10", () => {
    test("Then it should return a cheeseburger with price 10", async () => {
      const expectedCheeseBurgerPrice = 10;
      const {
        result: {
          current: { modifyBurger },
        },
      } = renderHook(() => useBurgersApi(), { wrapper: providerWrapper });

      const modifiedCheeseBurger = await modifyBurger(editedCheeseBurgerMock);

      expect(modifiedCheeseBurger.price).toBe(expectedCheeseBurgerPrice);
    });
  });
});
