import { screen } from "@testing-library/react";
import renderWithProviders, {
  mockStore,
  renderWithProvidersAndMemoryRouter,
} from "../../testUtils/renderWithProviders";
import App from "./App";
import userEvent from "@testing-library/user-event";

import { server } from "../../mocks/node";
import { addBurgerErrorHandler } from "../../mocks/addBurgerErrorHandler";
import { errorHandlers } from "../../mocks/errorHandlers";
import { Route, Routes } from "react-router-dom";
import BurgerDetailPage from "../../pages/BurgerDetailPage/BurgerDetailPage";
import ModifyBurgerPage from "../../pages/ModifyBurgerPage/ModifyBurgerPage";
import BurgersPage from "../../pages/BurgersPage/BurgersPage";
import { modifyBurgerHandler } from "../../mocks/modifyBurgerHandler";

beforeEach(() => {
  server.resetHandlers();
  vi.resetAllMocks();
});

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
      renderWithProvidersAndMemoryRouter(<App />, [initialPath]);

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

      renderWithProvidersAndMemoryRouter(<App />, [initialPath]);

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

describe("Given a BurgerDetailPage component", () => {
  describe("When it is rendered with the burger 'Cheese Burger'", () => {
    test("Then it should have the title 'Cheese Burger' visible", async () => {
      const cheeseBurgerTitle = "Cheese Burger";

      renderWithProvidersAndMemoryRouter(
        <App />,
        ["/burgers/6567d60e9fbd027bb1d9d722"],
        mockStore,
      );

      const actualTitle = screen.getByRole("heading", {
        name: cheeseBurgerTitle,
      });

      expect(actualTitle).toContainHTML(cheeseBurgerTitle);
    });
  });

  describe("When it encounters an error", () => {
    test("Then it should throw a new error", async () => {
      server.use(...errorHandlers);
      const expectedToastMessage = "Error loading from API";

      renderWithProvidersAndMemoryRouter(
        <Routes>
          <Route path="/burgers/:id" element={<BurgerDetailPage />} />
        </Routes>,
        ["/burgers/6567d60e9fbd027bb1d9d722"],
      );

      const actualToast = await screen.findByText(expectedToastMessage);

      expect(actualToast).toBeVisible();
    });
  });
});

describe("Given the route /burger/modify/:id ", () => {
  describe("When the user edits a Cheese Burger to be named 'ClassBurger' ", () => {
    test("Then the burger is visible with the name 'ClassBurger' ", async () => {
      server.use(...modifyBurgerHandler);
      const expectedNewName = "ClassBurger";
      const nameInputLabel = "Name";
      const submitLabel = "Modify Burger";

      const user = userEvent.setup();
      renderWithProvidersAndMemoryRouter(
        <Routes>
          <Route path="/burgers/modify/:id" element={<ModifyBurgerPage />} />
          <Route path="/home" element={<BurgersPage />} />
        </Routes>,
        ["/burgers/modify/6567d60e9fbd027bb1d9d722"],
        mockStore,
      );

      const nameInput = await screen.findByRole("textbox", {
        name: nameInputLabel,
      });

      const submitButton = await screen.findByRole("button", {
        name: submitLabel,
      });

      await user.clear(nameInput);
      await user.type(nameInput, expectedNewName);
      await user.click(submitButton);

      const headingLabel = await screen.findByRole("heading", {
        name: expectedNewName,
      });

      expect(headingLabel).toBeInTheDocument();
    });
  });

  describe("When it encounters an error modifying a burger' ", () => {
    test("Then the message 'Error modifying burger' is visible ", async () => {
      server.use(...errorHandlers);
      const expectedErrorMessage = "Error modifying burger";

      const submitLabel = "Modify Burger";

      const user = userEvent.setup();
      renderWithProvidersAndMemoryRouter(
        <Routes>
          <Route path="/burgers/modify/:id" element={<ModifyBurgerPage />} />
          <Route path="/home" element={<BurgersPage />} />
        </Routes>,
        ["/burgers/modify/6567d60e9fbd027bb1d9d722"],
        mockStore,
      );

      const submitButton = await screen.findByRole("button", {
        name: submitLabel,
      });

      await user.click(submitButton);

      const actualToastMessage = screen.getByText(expectedErrorMessage);

      expect(actualToastMessage).toBeVisible();
    });
  });
});
