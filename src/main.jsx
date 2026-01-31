import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { RouterProvider } from "react-router";
import Router from "./router/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
);
