import { ThemeProvider } from "styled-components";
import defaultTheme from "../styles/DefaultTheme";
import GlobalStyles from "../styles/globalStyles";
import { RenderResult, render } from "@testing-library/react";

const renderWithProviders = (child: JSX.Element): RenderResult => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {child}
    </ThemeProvider>,
  );
};
export default renderWithProviders;
