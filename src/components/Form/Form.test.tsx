import { smartRenderWithProviders } from "../../testUtils/renderWithProviders";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then the 'Name' input is visible", () => {
      const nameLabel = "Name";

      const { getByRole } = smartRenderWithProviders(<Form buttonText="" />);

      const actualNameLabel = getByRole("textbox", { name: nameLabel });

      expect(actualNameLabel).toBeVisible();
    });
  });
});
