import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./redux/index.js";
import { I18nContextProvider } from "./i18n/index";

export const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <I18nContextProvider>
      <App />
    </I18nContextProvider>
  </Provider>,
  document.getElementById("root")
);
