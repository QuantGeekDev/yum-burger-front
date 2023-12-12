import { screen } from "@testing-library/react";
import {
  mockStore,
  renderWithProvidersAndMemoryRouter,
} from "../../testUtils/renderWithProviders";

describe("Given a BurgerDetailPage component", () => {
  describe("When it is rendered with the burger 'Cheese Burger'", () => {
    test("Then it should have the title 'Cheese Burger' visible", async () => {
      const cheeseBurgerTitle = "Cheese Burger";

      renderWithProvidersAndMemoryRouter(
        <></>,
        ["/burgers/6567d60e9fbd027bb1d9d722"],
        mockStore,
      );

      const actualTitle = screen.getByRole("heading", {
        name: cheeseBurgerTitle,
      });

      expect(actualTitle).toContainHTML(cheeseBurgerTitle);
    });
  });
});
