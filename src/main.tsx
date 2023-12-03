import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/barlow";
import "@fontsource/plus-jakarta-sans";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import defaultTheme from "./styles/DefaultTheme";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
