import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import MainLayout from "./containers/MainLayout/MainLayout";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeMTProvider, defaultThemes } from "mt-elements";
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import reducer from "./redux/reducers";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <ThemeMTProvider theme={defaultThemes.light}>
        <ReduxProvider store={store}>
          <MainLayout />
        </ReduxProvider>
      </ThemeMTProvider>
    </Router>
  </ErrorBoundary>,
  document.getElementById("root")
);
