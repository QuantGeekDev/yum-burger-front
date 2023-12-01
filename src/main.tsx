import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import MainTheme from "./styles/DefaultTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalStyles />
      <div />
    </ThemeProvider>
  </React.StrictMode>,
);
