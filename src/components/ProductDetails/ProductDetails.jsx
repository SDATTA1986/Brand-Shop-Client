
import { useLoaderData, useParams } from "react-router-dom";

import StarRatings from 'react-star-ratings';
import Navbar from "../Shared/Navbar";
import swal from "sweetalert";

const ProductDetails = () => {




    const { _id } = useParams();
    console.log(_id)
    const products = useLoaderData();
console.log(products)
    const singleProduct = products.find(product => product._id === (_id));
    console.log(singleProduct)
    const { image, name, state, type, price, rating, description } = singleProduct || {};

    const rating2=parseInt(rating);

    const handleCart=()=>{
        const myData={
            image,name,state,type,price,description,rating,_id
        };
        
        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                swal("Congratulations!", "You have successfully Added to Cart!", "success");
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>



            <div className=" flex justify-center  ">
                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`${image}`} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Brand:  <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{state}</span></h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

                        <h5 className="mb-2 text-[18px] font-bold tracking-tight text-gray-900 dark:text-white">Price:  <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</span></h5>
                        <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">Type <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{type}</span></h5>


                        <h5 className="mb-2 text-[14px] font-bold tracking-tight text-gray-900 dark:text-white">Rating: <span className="font-medium">{rating2}/10</span> </h5>
                        <StarRatings
                            rating={rating2}
                            starDimension="20px"
                            starSpacing="2px"
                            numberOfStars={10}
                            starRatedColor="orange"
                        />

                        <div>
                            <button onClick={handleCart} className="btn bg-green-600 hover:bg-green-700 mt-2">Add to Cart</button>
                        </div>
                    </div>

                </a>
            </div>

        </div>





    );
};

export default ProductDetails;