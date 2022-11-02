import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Main from "../LayOut/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>,
    },
    {
        path: '/auth',
        element: <Main></Main>,
        children: [
            {
                path: '/auth/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);