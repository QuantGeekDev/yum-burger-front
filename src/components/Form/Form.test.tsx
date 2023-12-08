import { screen } from "@testing-library/react";
import renderWithProviders, {
  smartRenderWithProviders,
} from "../../testUtils/renderWithProviders";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then the 'Name' input is visible", () => {
      const nameLabel = "Name";

      const { getByRole } = smartRenderWithProviders(<Form />);

      const actualNameLabel = getByRole("textbox", { name: nameLabel });

      expect(actualNameLabel).toBeVisible();
    });
  });

  describe("When the user clicks the 'Submit' button", () => {
    test("Then event should call it's preventDefault method", () => {});
  });
});
