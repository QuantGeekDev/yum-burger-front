import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/barlow";
import "@fontsource/plus-jakarta-sans";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import defaultTheme from "./styles/DefaultTheme";
import App from "./components/App/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
