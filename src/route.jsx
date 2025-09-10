import React from "react";
import { useRoutes } from "react-router-dom";
import Landing from "./pages/landing/page";


export default function Router () {
  const routes = useRoutes([
    {
        path: "/",
        element: <Landing />,
        index: true,
    },
  ]);
    return routes;}
