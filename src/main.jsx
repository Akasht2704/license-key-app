import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import AuthBootstrap from "./AuthBootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AuthBootstrap>
      <App />
    </AuthBootstrap>
  </AuthProvider>
);
