import { screen } from "@testing-library/react";
import { cheeseBurgerMock } from "../../store/features/burgers/mocks/burgersMock";
import renderWithProviders from "../../utils/renderWithProviders";
import BurgerCard from "./BurgerCard";

describe("Given a BurgerCard component", () => {
  describe("When it is instantiated with a Cheese Burger", () => {
    test("Then the title 'Cheese Burger' is visible", () => {
      const cheeseBurgerTitle = "Cheese Burger";

      renderWithProviders(<BurgerCard burger={cheeseBurgerMock} />);
      const actualCheeseBurgerTitle = screen.getByRole("heading", {
        name: cheeseBurgerTitle,
      });

      expect(actualCheeseBurgerTitle).toBeVisible();
    });

    test("The the background image is visible", () => {
      const backgroundImageAltText = "Cheese Burger";

      renderWithProviders(<BurgerCard burger={cheeseBurgerMock} />);
      const actualBackgroundImage = screen.getByRole("img", {
        name: backgroundImageAltText,
      });

      expect(actualBackgroundImage).toBeVisible();
    });
  });
});
