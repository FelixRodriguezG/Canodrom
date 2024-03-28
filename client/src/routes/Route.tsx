import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/dashboards/Dashboard";
import { Layout } from "../components/Layout";
import Login from "../pages/login/Login";
import DataTablePage from "@/pages/dashboard2/dataTablePage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout />
        ),
        children: [
            {
                path: "/",
                element: <Login 
                
                />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/datatable",
                element: <DataTablePage />
            },
        ]
    },
]);
