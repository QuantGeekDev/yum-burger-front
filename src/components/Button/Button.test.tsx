import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component with text 'Test' and a mocked actionOnclick", () => {
  const expectedText = "Test";
  const expectedRoleName = "Test icon Test";
  const mockedAction = vitest.fn();

  describe("When instanced", () => {
    test("Then the button with text 'Test' should be visible", () => {
      renderWithProviders(
        <Button
          text={expectedText}
          actionOnClick={mockedAction}
          className=""
          iconUrl="./icons/deleteIcon.webp"
        />,
      );

      const actualButton = screen.getByRole("button", {
        name: expectedRoleName,
      });

      expect(actualButton).toBeVisible();
    });
  });

  describe("When the button is pressed", () => {
    test("Then the mockedAction is called", async () => {
      const user = userEvent.setup();

      renderWithProviders(
        <Button
          text={expectedText}
          actionOnClick={mockedAction}
          className=""
          iconUrl="./icons/deleteIcon.webp"
        />,
      );

      const button = screen.getByRole("button", { name: expectedRoleName });

      await user.click(button);

      expect(mockedAction).toHaveBeenCalled();
    });
  });
});
