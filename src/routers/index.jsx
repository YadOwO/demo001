import Login from "../pages/Login";
import Main from "../pages/Main";
import { Navigate } from "react-router-dom";

export default [
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/main',
        element:<Main/>
    },
    {
        path:'/',
        element:<Navigate to='/login'/>
    }
]