import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/renderWithProviders";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then the loading message 'Loading' should be visible", () => {
      const expectedLoadingMessage = "Loading ...";

      renderWithProviders(<Loading />);
      const actualLoading = screen.getByText(expectedLoadingMessage);

      expect(actualLoading).toBeVisible();
    });
  });
});
