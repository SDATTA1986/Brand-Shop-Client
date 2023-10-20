import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
import Navbar from "../Shared/Navbar";


const UpdateProduct = () => {
    const product=useLoaderData();
    const { _id,image, name,  type, price, rating, description } = product || {};
    let {state}= product ||{};
    const [state1,setState]=useState(state);
    const handleChange = event=>{
        const brand=event.target.value;
        setState(brand);
        console.log(brand);
    }
    const handleUpdateProduct=e=>{
        e.preventDefault();
        const form=e.target;
        const image=form.image.value;
        const name=form.name.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        state=state1;
        console.log(image,name,state,type,price,description,rating);
        const myData={
            image,name,state,type,price,description,rating
        };
        form.reset();
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(myData),
          })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                swal("Congratulations!", "You have successfully Updated This Product!", "success");
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl font-extrabold text-center">Update: {name}</h1>
            <form onSubmit={handleUpdateProduct}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="url" name="image" id="Image URL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={image} placeholder="Image URL" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={name} placeholder="Product Name" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                    <select onChange={handleChange} value={state} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Sony">Sony</option>
                        <option value="Samsung">Samsung</option>
                        <option value="LG">LG</option>
                        <option value="Apple">Apple</option>
                        <option value="Dell">Dell</option>
                        
                    </select>


                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="type" id="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={type} placeholder="Product Type" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={price} placeholder="Product Price" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={description} placeholder="Short Description" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" id="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={rating} placeholder="Rating(out of 10)" required />

                    </div>
                    
                </div>

                <input type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value="Update"/>
            </form>

        </div>
    );
};

export default UpdateProduct;