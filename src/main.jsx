import React from "react";
import ReactDOM from "react-dom/client";

import theme from './styles/theme'
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

import { SignIn } from "./pages/SignIn";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
);