import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a '404 Page Not Found' page", () => {
  describe("When it is rendered", () => {
    test("Then the text 'Page Not Found' should be visible", () => {
      const expectedTitle = "Page Not Found";

      renderWithProviders(<NotFoundPage />);
      const actualTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(actualTitle).toBeVisible();
    });

    test("Then an image of a half-eaten burger should be visible", () => {
      const expectedImageAltText = "Half eaten burger";

      renderWithProviders(<NotFoundPage />);
      const actualBurgerImage = screen.getByRole("img", {
        name: expectedImageAltText,
      });

      expect(actualBurgerImage).toBeVisible();
    });
  });
});
