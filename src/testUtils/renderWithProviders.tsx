import { ThemeProvider } from "styled-components";
import { RenderResult, render } from "@testing-library/react";
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
export default renderWithProviders;
