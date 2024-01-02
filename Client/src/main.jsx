import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./Context/authContext.jsx";
import "antd/dist/reset.css";
import { SearchProvider } from "./Context/Search.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </SearchProvider>
  </AuthProvider>
);
