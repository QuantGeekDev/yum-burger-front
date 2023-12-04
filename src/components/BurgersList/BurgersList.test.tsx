import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import BurgersList from "./BurgersList";
import { rootReducer } from "../../store";
import { configureStore } from "@reduxjs/toolkit";
import { burgersMock } from "../../store/features/burgers/mocks/burgersMock";

describe("Given a BurgersList component", () => {
  describe("When it is rendered with a store containing Classic Burger and Cheese Burger", () => {
    test("Then the title 'Classic Burger' should be visible on the page", () => {
      const mockStore = configureStore({
        reducer: { burgersState: rootReducer },
        preloadedState: { burgersState: { burgers: burgersMock } },
      });
      const classicBurgerTitle = "Classic Burger";

      renderWithProviders(<BurgersList />, mockStore);

      const actualBurgerTitle = screen.getByRole("heading", {
        name: classicBurgerTitle,
      });

      expect(actualBurgerTitle).toBeVisible();
    });
  });
});
