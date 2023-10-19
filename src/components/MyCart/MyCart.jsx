import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import CartProduct from "../CartProduct/CartProduct";


const MyCart = () => {
    const items = useLoaderData();
    console.log(items, items.length)
    return (
        <div>
            <Navbar></Navbar>
            {items.length > 0 ?
                <div className="mt-[70px] grid grid-cols-2 gap-20 mb-[20px]">
                {
                    items.map(item => <CartProduct key={item._id} item={item} ></CartProduct>)
                }            
                   
                </div>
                :
                <div className="mt-[70px] text-center text-5xl mb-[20px]">
                    Cart is Empty
                </div>
            }
        </div>
    );
};

export default MyCart;