import { createBrowserRouter } from "react-router-dom";
import Error from "../../Components/Pages/Error/Error";
import Home from "../../Components/Pages/Home/Home";
import Login from "../../Components/Pages/Login/Login";
import Services from "../../Components/Pages/Services/Services";
import SignUp from "../../Components/Pages/SignUp/SignUp";
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'*',
                element: <Error></Error>
            }
        ]
    }
])