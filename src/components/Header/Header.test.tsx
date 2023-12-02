import renderWithProviders from "../../utils/renderWithProviders";
import Header from "./Header";
import { screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then the logo should be visible on the screen", () => {
      const logoAltText = "Nyam Burger Logo";

      renderWithProviders(<Header />);
      const actualLogo = screen.getByRole("img", { name: logoAltText });
      expect(actualLogo).toBeVisible();
    });

    test("Then the title should be visible on the screen", () => {
      const titleText = "NyamBurger";

      renderWithProviders(<Header />);
      const actualTitle = screen.getByRole("heading", { name: titleText });

      expect(actualTitle).toBeVisible();
    });
  });
});
