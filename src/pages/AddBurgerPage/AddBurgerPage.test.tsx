import { smartRenderWithProviders } from "../../testUtils/renderWithProviders";
import AddBurgerPage from "./AddBurgerPage";

describe("Given an AddBurgerPage component", () => {
  describe("When it is rendered", () => {
    const { getByRole } = smartRenderWithProviders(<AddBurgerPage />);

    test("Then the title 'Add Burger' is visible", () => {
      const titleText = "Add Burger";

      const actualTitle = getByRole("heading", { name: titleText });

      expect(actualTitle).toBeVisible();
    });

    test("Then the input 'Name' is visible", () => {
      const nameInputLabel = "Name";

      const actualNameInput = getByRole("textbox", {
        name: nameInputLabel,
      });

      expect(actualNameInput).toBeVisible();
    });
  });
});
