import { act, screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../testUtils/renderWithProviders";
import BurgersPage from "./BurgersPage";
import { server } from "../mocks/node";
import { errorHandlers } from "../mocks/errorHandlers";

describe("Given a BurgersPage component", () => {
  describe("When it is rendered", () => {
    test("Then the title 'Our Burgers' should be visible", () => {
      const titleText = "Our Burgers";

      renderWithProviders(<BurgersPage />);
      const actualBurgerPage = screen.getByRole("heading", { name: titleText });

      expect(actualBurgerPage).toBeVisible();
    });
  });

  describe("When it encounters an error fetching from API", () => {
    test("Then a toast message with 'Error loading burgers' is visible", async () => {
      server.use(...errorHandlers);

      act(() => {
        renderWithProviders(<BurgersPage />);
      });

      await waitFor(async () => {
        const expectedToastMessage = "Error loading burgers";
        const actualToast = await screen.getAllByText(expectedToastMessage);

        expect(actualToast).toBeDefined();
      });
    });
  });
});
