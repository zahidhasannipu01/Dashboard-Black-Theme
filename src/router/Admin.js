import Dashboard from "../view/dashboard/Dashboard";

const { default: Layout } = require("../layout/Layout");

const adminRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Dashboard />,
    },
  ],
};

export default adminRoutes;
