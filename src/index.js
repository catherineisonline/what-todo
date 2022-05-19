import React from "react";
import ReactDOM from "react-dom";
//Styles
import "../src/assets/index.css";
import "../src/assets/responsive.css"
import App from "./App";
//Redux
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
