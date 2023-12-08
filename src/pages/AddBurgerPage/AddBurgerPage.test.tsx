import { smartRenderWithProviders } from "../../testUtils/renderWithProviders";
import AddBurgerPage from "./AddBurgerPage";

describe("Given an AddBurgerPage component", () => {
  describe("When it is rendered", () => {
    test("Then the title 'Add Burger' is visible", () => {
      const expectedTitleText = "Add Burger";

      const { getByRole } = smartRenderWithProviders(<AddBurgerPage />);
      const actualTitle = getByRole("heading", { name: expectedTitleText });

      expect(actualTitle).toBeVisible();
    });
  });
});
