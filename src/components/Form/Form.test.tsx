import userEvent from "@testing-library/user-event";
import { smartRenderWithProviders } from "../../testUtils/renderWithProviders";
import Form from "./Form";
import { waitFor } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then the 'Name' input is visible", () => {
      const nameLabel = "Name";

      const { getByRole } = smartRenderWithProviders(
        <Form buttonText="" onSubmit={() => {}} buttonAriaLabel="" />,
      );

      const actualNameLabel = getByRole("textbox", { name: nameLabel });

      expect(actualNameLabel).toBeVisible();
    });
  });

  describe("When the user clicks the submit button", () => {
    test("Then the form's onSubmit method gets called", async () => {
      const onSubmit = vi.fn();
      const submitButtonText = "submit";
      const user = userEvent.setup();

      const { getByRole } = smartRenderWithProviders(
        <Form
          buttonText={submitButtonText}
          onSubmit={() => onSubmit()}
          buttonAriaLabel={submitButtonText}
        />,
      );

      const submitButton = getByRole("button", { name: submitButtonText });
      await user.click(submitButton);

      waitFor(() => expect(onSubmit).toHaveBeenCalled());
    });
  });

  describe("When the user writes 'John Doe' in the 'Name' input", () => {
    test("Then the 'Name' input has the the text 'John Doe'", async () => {
      const nameInputLabel = "Name";
      const user = userEvent.setup();

      const { getByRole } = smartRenderWithProviders(
        <Form buttonText="submit" onSubmit={() => {}} buttonAriaLabel="" />,
      );

      const nameInput = getByRole("textbox", { name: nameInputLabel });
      await user.click(nameInput);
      await user.type(nameInput, "John Doe");

      expect((nameInput as HTMLInputElement).value).toBe("John Doe");
    });
  });

  describe("When the user checks the checkbox for the 'hasGluten'  input", () => {
    test("Then the 'hasGluten' input is checked", async () => {
      const hasGlutenInputLabel = "Has Gluten Free option?";
      const user = userEvent.setup();

      const { getByRole } = smartRenderWithProviders(
        <Form buttonText="submit" onSubmit={() => {}} buttonAriaLabel="" />,
      );

      const hasGlutenInput = getByRole("checkbox", {
        name: hasGlutenInputLabel,
      });
      await user.click(hasGlutenInput);

      expect((hasGlutenInput as HTMLInputElement).value).toBe("on");
    });
  });
});
