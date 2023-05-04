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
import chefsLoader from "./loaders/chefsLoader";
import recipesLoader from "./loaders/recipesLoader";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./providers/AuthProvider";
import Blog from "./routers/blog/Blog";
import Login from "./routers/login/Login";
import Recipes from "./routers/recipes/Recipes";
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
                loader: chefsLoader,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            // {
            //     path: "/recipes/:chefsID",
            //     element: <Recipes />,
            //     loader: recipesLoader,
            // },
            {
                path: "/recipes/:chefsID",
                element: (
                    <PrivateRoute>
                        <Recipes />
                    </PrivateRoute>
                ),
                loader: recipesLoader,
            },
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
