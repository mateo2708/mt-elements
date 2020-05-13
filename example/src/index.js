import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./containers/MainLayout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeMTProvider, defaultThemes } from "mt-elements";

ReactDOM.render(
  <Router>
    <ThemeMTProvider theme={defaultThemes.light}>
      <MainLayout />
    </ThemeMTProvider>
  </Router>,
  document.getElementById("root")
);
