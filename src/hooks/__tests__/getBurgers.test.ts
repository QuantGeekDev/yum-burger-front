import { renderHook } from "@testing-library/react";
import {
  cheeseBurgerMock,
  classicBurgerMock,
} from "../../store/features/burgers/mocks/burgersMock";
import useBurgersApi from "../useBurgerApi";
import { providerWrapper } from "../../testUtils/providerWrapper";
import { vi } from "vitest";
import axios from "axios";

beforeEach(() => vitest.resetModules());

describe("Given a useApi hook's getBurgers method", () => {
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

  describe("When it encounters an error", () => {
    test("Then it should call its toast method with message 'Error getting burgers' and call dispatch with the hide loading screen action", async () => {
      const expectedErrorMessage = "Error getting burgers from API";
      axios.get = vi
        .fn()
        .mockRejectedValue(new Error("Error getting burgers from API"));

      const {
        result: {
          current: { getBurgers },
        },
      } = renderHook(() => useBurgersApi(), {
        wrapper: providerWrapper,
      });

      await expect(() => getBurgers()).rejects.toThrow(expectedErrorMessage);
    });
  });
});
