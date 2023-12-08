import { ThemeProvider } from "styled-components";
import { RenderResult, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "../styles/DefaultTheme";
import GlobalStyles from "../styles/globalStyles";
import { rootReducer, store } from "../store";
import { Store, configureStore } from "@reduxjs/toolkit";
import { ToastContainer } from "react-toastify";
import { burgersMock } from "../store/features/burgers/mocks/burgersMock";

export const mockStore = configureStore({
  reducer: { rootReducer: rootReducer },
  preloadedState: {
    rootReducer: { burgersReducer: { burgers: burgersMock } },
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

export const smartRenderWithProviders = (
  child: JSX.Element,
  mockStore?: Store,
) => {
  const smartRender = () =>
    render(
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

  const smartRenderWithProviderResponse = {
    render: () => smartRender(),
    getByText: (text: string) => {
      smartRender();
      return screen.getByText(text);
    },
    getByRole: (role: string, options: { name: string }) => {
      smartRender();
      return screen.getByRole(role, options);
    },
  };

  return smartRenderWithProviderResponse;
};
export default renderWithProviders;
