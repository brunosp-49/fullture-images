import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { InputProvider } from "./assets/global/context/globalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InputProvider>
      <App />
    </InputProvider>
  </React.StrictMode>
);
