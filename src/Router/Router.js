import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Page/Home/HomePage";
import ContactPage from "../Page/Contact/ContactPage";
import AboutPage from "../Page/About/AboutPage";
import Products from "../Page/Products/Products";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h1>Error Page</h1>,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path:'/categories/:name',
        element:<Products></Products>

      },
    ],
  },
]);

export default router;
