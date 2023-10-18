import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Layouts/Root";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import MyCart from "../components/MyCart/MyCart";
import AddProduct from "../components/AddProduct/AddProduct";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/brands.json'),

            },
            
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>

            },
           
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register />

            }
        ]
    }
]);
export default router;