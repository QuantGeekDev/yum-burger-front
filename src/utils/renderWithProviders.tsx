import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/DefaultTheme";
import GlobalStyles from "../styles/globalStyles";
import { RenderResult, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithProviders = (child: JSX.Element): RenderResult => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {child}
      </ThemeProvider>
    </BrowserRouter>,
  );
};
export default renderWithProviders;
