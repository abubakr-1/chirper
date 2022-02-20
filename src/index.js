import React from "react";
import ReactDOM from "react-dom";
//App
import App from "./App";
//Style
import "./Styles/index.css";
//BrowserRouter
import { BrowserRouter } from "react-router-dom";
//Bootstrap Icons
import "bootstrap-icons/font/bootstrap-icons.css";
//Toastify
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
