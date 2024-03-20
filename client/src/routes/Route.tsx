import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/dashboards/Dashboard";
import { Layout } from "../components/Layout";
import Login from "../pages/login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
          
        ]
    },



]);
