import React from "react";
import { HeroeDetalle } from "./components";
import { DashboardPage } from "./pages";

export const routes =[
    {path: "/*", element: <DashboardPage/>},
    {path: "/heroe/:id", element: <HeroeDetalle/>}
]