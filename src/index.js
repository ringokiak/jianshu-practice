import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from "./style";
import App from "./App";

const NewApp = (
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
);

ReactDOM.render(NewApp, document.getElementById("root"));
