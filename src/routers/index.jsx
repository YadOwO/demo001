import Login from "../pages/Login";
import Main from "../pages/Main";
import User from '../pages/User'
import Useradd from "../pages/Useradd";
import Look from "../pages/Look";
import { Navigate } from "react-router-dom";
import Erweima from "../pages/Erweima";
import BookAction from "../pages/BookAction";
import Echart from "../pages/Echart";

export default [
    {
        path:'/',
        element:<Navigate to='/login'/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/main',
        element:<Main/>,
        children:[{
            path:'user',
            element:<User/>
        },
        {
            path:'useradd',
            element:<Useradd/>
        },
        {
            path:'look',
            element:<Look/>
        },
        {
            path:'erweima',
            element:<Erweima/>
        },
        {
            path:'bookaction',
            element:<BookAction/>
        },
        {
            path:'echart',
            element:<Echart/>
        }
        ]
    }
]