import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NalsarProvider } from "./Hooks/useData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NalsarProvider>
      <App />
    </NalsarProvider>
  </React.StrictMode>
);
