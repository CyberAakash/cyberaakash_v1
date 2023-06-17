import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Root from "./routes/root";
import About from "./routes/about";
import Project from "./routes/project";

import ErrorPage from "./404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "about",
    //     element: <About />,
    //   },
    // ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "project",
    element: <Project />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
