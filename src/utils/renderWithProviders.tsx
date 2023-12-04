import { ThemeProvider } from "styled-components";
import { RenderResult, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import defaultTheme from "../styles/DefaultTheme";
import GlobalStyles from "../styles/globalStyles";
import { store } from "../store";

const renderWithProviders = (child: JSX.Element): RenderResult => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          {child}
        </ThemeProvider>
      </BrowserRouter>
      ,
    </Provider>,
  );
};
export default renderWithProviders;
