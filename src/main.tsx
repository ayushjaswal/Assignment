import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./Components/AuthPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProtectedRoute from "./Components/ProtectedRoutes";
import Dashboard from "./Components/Dashboard";
import NavElm from "./Components/NavElm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>{null}</ProtectedRoute>,
  },
  {
    path: "/:navId",
    element: (
      <ProtectedRoute>
        <NavElm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <AuthPage title={"Login"} />,
  },
  {
    path: "/signup",
    element: <AuthPage title={"Sign Up"} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
