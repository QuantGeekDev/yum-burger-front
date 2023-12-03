import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When it is rendered", () => {
    test("Then the 'Burgers' link should be visible", () => {
      const burgerLinkText = "Burgers";

      renderWithProviders(<NavigationBar />);

      const actualBurgerLink = screen.getByRole("link", {
        name: burgerLinkText,
      });

      expect(actualBurgerLink).toBeVisible();
    });
  });
});
