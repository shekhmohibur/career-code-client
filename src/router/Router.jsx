import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/register/SignUp";
import HomeLayout from "../pages/home/homeLayout/HomeLayout";

const Router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        children: [
            {
                index:true,
                Component:HomeLayout
            },
            {
                path:"signin",
                Component: SignIn,
            },
            {
                path:"signup",
                Component: SignUp,
            },
        ]
    },
    {
        path:'*',
        Component:NotFound,
    }
])

export default Router;