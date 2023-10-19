import { createBrowserRouter } from "react-router-dom";

import Root from "../components/Layouts/Root";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import MyCart from "../components/MyCart/MyCart";
import AddProduct from "../components/AddProduct/AddProduct";
import Home from "../components/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../components/BrandDetails/BrandDetails";
import DisplayProduct from "../components/DisplayProduct/DisplayProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";

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
            path:'/brand/:name',
            element:<BrandDetails></BrandDetails>,
            loader: ()=>fetch('http://localhost:5000/users')
            },
            {
            path:'/product/:_id',
            element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ()=>fetch('http://localhost:5000/users')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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