import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Profile from "./Profile.jsx";
import Cricket from "./Cricket.jsx";
import Football from "./Football.jsx";
import ErrorPage from "./ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>
  },
  // {
  //   path: "profile",
  //   element: <Profile />,
  //   children: [
  //     { path: "Cricket", element: <Cricket /> },
  //     { path: "Football", element: <Football /> },
  //   ],
  // },

  {
  path:"profile/:name",
  element:<Profile/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
  </StrictMode>
);
