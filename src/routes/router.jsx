import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import LoginRoot from "../pages/LoginRoot";
import Home from "../components/home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute component={<LoginRoot />}></ProtectedRoute>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
