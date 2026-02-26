// import { createBrowserRouter } from "react-router";
// import Login from "../Pages/Login";
// import DashboardLayout from "../Layouts/DashboardLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardLayout />,
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;