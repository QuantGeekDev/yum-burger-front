import { ThemeProvider } from "styled-components";
import { RenderResult, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import defaultTheme from "../styles/DefaultTheme";
import GlobalStyles from "../styles/globalStyles";
import { rootReducer, store } from "../store";
import { Store, configureStore } from "@reduxjs/toolkit";
import { ToastContainer } from "react-toastify";
import {
  burgersMock,
  cheeseBurgerMock,
} from "../store/features/burgers/mocks/burgersMock";
import { MongooseBurgerStructure } from "../store/features/burgers/types";

import BurgerDetailPage from "../pages/BurgerDetailPage/BurgerDetailPage";

export const mockStore = configureStore({
  reducer: { rootReducer: rootReducer },
  preloadedState: {
    rootReducer: {
      burgersReducer: {
        burgers: burgersMock,
        selectedBurger: cheeseBurgerMock as MongooseBurgerStructure,
      },
    },
  },
});

const renderWithProviders = (
  child: JSX.Element,
  mockStore?: Store,
): RenderResult => {
  return render(
    <Provider store={mockStore ?? store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <ToastContainer />
          {child}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

export const renderWithProvidersAndMemoryRouter = (
  child: JSX.Element,
  initialEntry: string[],
  mockStore?: Store,
): RenderResult => {
  return render(
    <Provider store={mockStore ?? store}>
      <MemoryRouter initialEntries={initialEntry}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <ToastContainer />
          <Routes>
            <Route path="/burgers/:id" element={<BurgerDetailPage />} />
          </Routes>
          {child}
        </ThemeProvider>
      </MemoryRouter>
    </Provider>,
  );
};

export const smartRenderWithProviders = (
  child: JSX.Element,
  mockStore?: Store,
) => {
  const smartRender = () =>
    render(
      <BrowserRouter>
        <Provider store={mockStore ?? store}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <ToastContainer />
            {child}
          </ThemeProvider>
        </Provider>
      </BrowserRouter>,
    );

  const smartRenderWithProviderResponse = {
    render: () => smartRender(),

    getByRole: (role: string, options: { name: string }) => {
      smartRender();
      return screen.getByRole(role, options);
    },
  };

  return smartRenderWithProviderResponse;
};

export const smartRenderWithMemoryRouterProviders = (
  child: JSX.Element,
  initialEntries: string[],
  mockStore?: Store,
) => {
  const smartRenderWithMemoryRouter = () =>
    render(
      <Provider store={mockStore ?? store}>
        <MemoryRouter initialEntries={initialEntries}>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <ToastContainer />
            {child}
          </ThemeProvider>
        </MemoryRouter>
      </Provider>,
    );

  const smartRenderWithMemoryRouterProviderResponse = {
    render: () => smartRenderWithMemoryRouter(),
    getByText: (text: string) => {
      smartRenderWithMemoryRouter();
      return screen.getByText(text);
    },
  };

  return smartRenderWithMemoryRouterProviderResponse;
};
export default renderWithProviders;
