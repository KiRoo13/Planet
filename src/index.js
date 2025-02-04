import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { state } from "./store/state";
import App from "./App";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

let point = document.getElementById("root")
const root = ReactDOM.createRoot(point);
root.render(
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Provider store={state}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
