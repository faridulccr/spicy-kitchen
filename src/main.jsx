import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// bootstrap import
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.scss";

// components import
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import Home from "./components/home/Home";
// import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./providers/AuthProvider";
import Login from "./routers/login/Login";
import SignUp from "./routers/signUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            // {
            //     path: "/profile",
            //     element: (
            //         <PrivateRoute>
            //             <Profile />
            //         </PrivateRoute>
            //     ),
            // },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
