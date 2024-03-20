import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/dashboards/Dashboard";
import { Layout } from "../components/Layout";
import Login from "../pages/login/Login";
import { ListComponent } from "@/pages/dashboards/components/ListComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Login />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/list",
                element: <ListComponent />
            },
        ]
    },



]);
