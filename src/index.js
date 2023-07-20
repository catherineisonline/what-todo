import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Styles
import "../src/assets/index.css";
import App from "./App";
//Redux
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
