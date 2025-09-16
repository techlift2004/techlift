import React from "react";
import { useRoutes } from "react-router-dom";
import Landing from "./pages/landing/page";
import About from "./pages/about/page";


export default function Router () {
  const routes = useRoutes([
    {
        path: "/",
        element: <Landing />,
        index: true,
    },

     {
        path: "/about",
        element: <About />,
        index: true,
    },
  ]);
    return routes;}
