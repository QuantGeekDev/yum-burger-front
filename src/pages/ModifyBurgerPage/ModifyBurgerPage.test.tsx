import { smartRenderWithProviders } from "../../testUtils/renderWithProviders";
import ModifyBurgerPage from "./ModifyBurgerPage";

describe("Given a ModifyBurgerPage page", () => {
  describe("When it is rendered", () => {
    test("Then the title 'Modify Burger' should be visible", () => {
      const expectedTitle = "Modify Burger";

      const { getByRole } = smartRenderWithProviders(<ModifyBurgerPage />);

      const actualTitle = getByRole("heading", { name: expectedTitle });

      expect(actualTitle).toBeVisible();
    });

    test("Then the input 'Name' is visible", () => {
      const nameInputLabel = "Name";

      const { getByRole } = smartRenderWithProviders(<ModifyBurgerPage />);

      const actualTitle = getByRole("textbox", { name: nameInputLabel });

      expect(actualTitle).toBeVisible();
    });
  });
});
