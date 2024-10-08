import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/Allproducts";
import Login from "../Pages/Auth/Login/Login";
import Registration from "../Pages/Auth/Registration/Registration";
import NotFound from "../Pages/Error/NotFound";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<NotFound/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/all-products",
                element:<AllProducts/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Registration/>
            }
        ]
    }
]);

export default Router;