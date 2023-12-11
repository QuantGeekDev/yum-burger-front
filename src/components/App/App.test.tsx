import { screen } from "@testing-library/react";
import renderWithProviders, {
  renderWithProvidersAndMemoryBrowser,
} from "../../testUtils/renderWithProviders";
import App from "./App";
import userEvent from "@testing-library/user-event";

import { server } from "../../mocks/node";
import { addBurgerErrorHandler } from "../../mocks/addBurgerErrorHandler";

describe("Given an App component", () => {
  describe("When it is rendered and the route is '/home'", () => {
    test("Then it should display the title 'Our Burgers'", () => {
      const expectedTitle = "Our Burgers";

      renderWithProviders(<App />);

      const actualTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(actualTitle).toBeInTheDocument();
    });
  });

  describe("When the route is '/burgers/add/ and a user submits a form with valid input", () => {
    test("Then the message 'Burger created succesfully' appears and the user is redirected to the /burgers page", async () => {
      const expectedToastMessage = "Burger added succesfully";
      const submitButtonText = "Add Burger";
      const user = userEvent.setup();
      const initialPath = "/burgers/add";
      const homePageTitle = "Our Burgers";
      renderWithProvidersAndMemoryBrowser(<App />, [initialPath]);

      const submitButton = screen.getByRole("button", {
        name: submitButtonText,
      });
      const nameInput = screen.getByRole("textbox", { name: "Name" });
      const imageUrlInput = screen.getByRole("textbox", { name: "Image URL" });
      const ingredientsInput = screen.getByRole("textbox", {
        name: "Ingredients",
      });
      const priceInput = screen.getByRole("spinbutton", { name: "Price" });
      const caloriesInput = screen.getByRole("spinbutton", {
        name: "Calories",
      });

      await user.type(nameInput, "Tasty Burger");
      await user.type(imageUrlInput, "https://google.com/image.webp");
      await user.type(ingredientsInput, "Cheese, Tomatos");
      await user.type(priceInput, "2");
      await user.type(caloriesInput, "2");

      await user.click(submitButton);

      const actualToast = screen.getAllByText(expectedToastMessage);

      expect(actualToast[0]).toBeVisible();

      const actualHomepageTitle = screen.getByRole("heading", {
        name: homePageTitle,
      });

      expect(actualHomepageTitle).toBeVisible();
    });
  });

  describe("When the route is 'burgers/add' and the response arrives empty", () => {
    test("Then the message 'Error adding burger' appears ", async () => {
      server.use(...addBurgerErrorHandler);

      const expectedToastMessage = "Error adding burger";
      const submitButtonText = "Add Burger";
      const user = userEvent.setup();
      const initialPath = "/burgers/add";

      renderWithProvidersAndMemoryBrowser(<App />, [initialPath]);

      const submitButton = screen.getByRole("button", {
        name: submitButtonText,
      });
      const nameInput = screen.getByRole("textbox", { name: "Name" });
      const imageUrlInput = screen.getByRole("textbox", { name: "Image URL" });
      const ingredientsInput = screen.getByRole("textbox", {
        name: "Ingredients",
      });
      const priceInput = screen.getByRole("spinbutton", { name: "Price" });
      const caloriesInput = screen.getByRole("spinbutton", {
        name: "Calories",
      });

      await user.type(nameInput, "Tasty Burger");
      await user.type(imageUrlInput, "https://google.com/image.webp");
      await user.type(ingredientsInput, "Cheese, Tomatos");
      await user.type(priceInput, "2");
      await user.type(caloriesInput, "2");

      await user.click(submitButton);

      const actualToast = screen.getAllByText(expectedToastMessage);

      expect(actualToast[0]).toBeVisible();
    });
  });
});
