import React from "react";

import "./App.scss";

import "bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project-details/:projectId", element: <ProjectDetails /> },
      { path: "/project-details/:projectId", element: <ProjectDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
