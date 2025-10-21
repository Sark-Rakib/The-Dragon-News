import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Components/Layout/Home.jsx";
import Homes from "./Pages/Homes.jsx";
import CategoryNews from "./Pages/CategoryNews.jsx";
import About from "./Components/About/About.jsx";
import Career from "./Components/Career/Career.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthLayout from "./Components/AuthLayout/AuthLayout.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import NewsDetails from "./Components/NewsDetails/NewsDetails.jsx";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        index: true,
        Component: Homes,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
