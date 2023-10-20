import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";

import { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";


const MyCart = () => {
    const items = useLoaderData();
    const [cartItem, setCartItem] = useState(items);
    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`,{
                    method:"DELETE",
                })
                .then(res=>res.json())
                .then(data=>{console.log(data);
                    const remaining=cartItem.filter(singleItem=>singleItem._id!==_id);
                    setCartItem(remaining);
                    if(data.deletedCount>0){
                        Swal.fire("Deleted !", "You have successfully Deleted This Product!", "success");
                    }
            })
          }})
        
        
    }
    
    return (
        <div>
            <Navbar></Navbar>
            {cartItem?.length > 0 ?
                <div className="mt-[70px] grid grid-cols-2 gap-20 mb-[20px]">
                   

                    {cartItem?.map(item => (
                        <div key={item._id}>
                            <div className="hero  bg-base-200">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={item.image} className=" rounded-lg shadow-2xl" />
                                    <div>
                                        <h1 className="text-2xl font-bold">{item.name}</h1>
                                        <p className="py-2  text-green-700 text-5xl font-bold">{item.state}</p>
                                        <p className="py-2">Type: {item.type}</p>


                                        <button onClick={() => handleDelete(item._id)} className="btn bg-green-600 hover:bg-green-700">Delete Item</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}

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