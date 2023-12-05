import { screen } from "@testing-library/react";
import renderWithProviders from "../testUtils/renderWithProviders";
import BurgersPage from "./BurgersPage";

describe("Given a BurgersPage component", () => {
  describe("When it is rendered", () => {
    test("Then the title 'Our Burgers' should be visible", () => {
      const titleText = "Our Burgers";

      renderWithProviders(<BurgersPage />);
      const actualBurgerPage = screen.getByRole("heading", { name: titleText });

      expect(actualBurgerPage).toBeVisible();
    });
  });
});
