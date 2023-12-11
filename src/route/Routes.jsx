import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
