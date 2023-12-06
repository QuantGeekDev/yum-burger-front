import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "@fontsource/barlow";
import "@fontsource/plus-jakarta-sans";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import defaultTheme from "./styles/DefaultTheme";
import App from "./components/App/App";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
