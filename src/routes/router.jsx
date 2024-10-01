import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../components/home/Home";
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
        element: <h1>Logged in</h1>,
      },
    ],
  },
]);
