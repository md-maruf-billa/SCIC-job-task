import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/Allproducts";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/all-products",
                element:<AllProducts/>
            }
        ]
    }
]);

export default Router;