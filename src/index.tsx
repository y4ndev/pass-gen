import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { store } from "./store/store";
import { Provider } from "react-redux";

const appElement = ReactDOM.createRoot(document.getElementById("app")!);
appElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);
