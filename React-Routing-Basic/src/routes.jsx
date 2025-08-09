import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
    path: "profile/:name",
    element: <Profile />,
  },
];

export { routes };
