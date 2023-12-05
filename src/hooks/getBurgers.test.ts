import { renderHook } from "@testing-library/react";
import {
  cheeseBurgerMock,
  classicBurgerMock,
} from "../store/features/burgers/mocks/burgersMock";
import useBurgersApi from "./useApi";
import { providerWrapper } from "../testUtils/providerWrapper";

describe("Given a useApi hook's loadBurgers method", () => {
  describe("When it is called with a request for burgers", () => {
    test("Then it should return an array with a Classic Burger and a Cheese Burger", async () => {
      const {
        result: {
          current: { getBurgers },
        },
      } = renderHook(() => useBurgersApi(), { wrapper: providerWrapper });

      const burgers = await getBurgers();

      expect(burgers[0]).toEqual(classicBurgerMock);
      expect(burgers[1]).toEqual(cheeseBurgerMock);
    });
  });
});
