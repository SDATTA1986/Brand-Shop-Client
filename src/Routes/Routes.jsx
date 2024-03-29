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
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";

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
            loader: ()=>fetch('https://brand-shop-server-side-q0n7ehyj9-sourav-dattas-projects.vercel.app/users')
            },
            {
            path:'/product/:_id',
            element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ()=>fetch('https://brand-shop-server-side-q0n7ehyj9-sourav-dattas-projects.vercel.app/users')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader:({params})=>fetch(`https://brand-shop-server-side-q0n7ehyj9-sourav-dattas-projects.vercel.app/users/${params.id}`)
                
            },
            
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ()=>fetch('https://brand-shop-server-side-q0n7ehyj9-sourav-dattas-projects.vercel.app/cart')
            },
           
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            }
        ]
    }
]);
export default router;