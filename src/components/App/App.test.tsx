import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered and the route is '/home'", () => {
    test("Then it should display the title 'Our Burgers'", () => {
      const expectedTitle = "Our Burgers";

      renderWithProviders(<App />);

      const actualTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(actualTitle).toBeInTheDocument();
    });
  });
});
