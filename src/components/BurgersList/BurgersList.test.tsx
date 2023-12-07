import { screen } from "@testing-library/react";
import renderWithProviders, {
  mockStore,
} from "../../testUtils/renderWithProviders";
import BurgersList from "./BurgersList";

describe("Given a BurgersList component", () => {
  describe("When it is rendered with a store containing Classic Burger and Cheese Burger", () => {
    test("Then the title 'Classic Burger' should be visible on the page", () => {
      const classicBurgerTitle = "Classic Burger";

      renderWithProviders(<BurgersList />, mockStore);

      const actualBurgerTitle = screen.getByRole("heading", {
        name: classicBurgerTitle,
      });

      expect(actualBurgerTitle).toBeVisible();
    });
  });
});
