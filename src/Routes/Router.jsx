import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../Pages/Home/Home";
import { Designed } from "../Pages/Portfolio/Designed/Designed";
import { AboutMe } from "../Pages/AboutMe/AboutMe";
import { AboutMe2 } from "../Pages/AboutMe/AboutMe2";
import { Skills2 } from "../Pages/Skills/Skills2";
import { Contact2 } from "../Pages/Contact/Contact2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:"/designed",
        element: <Designed></Designed>
      },
      {
        path:"/aboutme",
        element: <AboutMe2></AboutMe2>
      },
      {
        path:"/skills",
        element: <Skills2></Skills2>
      },
      {
        path:"/contact",
        element: <Contact2></Contact2>
      },

    ]
  },
]);

export default router
