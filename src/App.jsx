import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import AdminRegisteration from "./pages/Admin/AdminRegisteration.jsx";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/admin/registeration",
      element: <AdminRegisteration />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
