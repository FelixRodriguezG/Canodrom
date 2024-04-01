import { AuthLayout } from "@/components/AuthLayout";
import Dashboard from "@/pages/dashboards/Dashboard";
import {Login} from "@/pages/login/Login";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            { path: '/', element: <Login /> },
            { path: '/dashboard', element: <Dashboard /> },
        ]
    }
])