import { useState } from "react";
import Navbar from "../Shared/Navbar";
import swal from "sweetalert";

const AddProduct = () => {
    const [state,setState]=useState("Sony");
    const handleChange = event=>{
        const brand=event.target.value;
        setState(brand);
        console.log(brand);
    }
    const handleAddProduct=e=>{
        e.preventDefault();
        const form=e.target;
        const image=form.image.value;
        const name=form.name.value;
        const type=form.type.value;
        const price=form.price.value;
        const description=form.description.value;
        const rating=form.rating.value;
        
        console.log(image,name,state,type,price,description,rating);
        const myData={
            image,name,state,type,price,description,rating
        };
        form.reset();
        fetch("https://brand-shop-server-side-q0n7ehyj9-sourav-dattas-projects.vercel.app/users", {
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
                swal("Congratulations!", "You have successfully Added This Product!", "success");
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleAddProduct}>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="url" name="image" id="Image URL" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Image URL" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Product Name" required />

                </div>
                <div className="relative z-0 w-full mb-6 group">

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Name</label>
                    <select onChange={handleChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Sony">Sony</option>
                        <option value="Samsung">Samsung</option>
                        <option value="LG">LG</option>
                        <option value="Apple">Apple</option>
                        <option value="Dell">Dell</option>
                        
                    </select>


                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="type" id="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Product Type" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Product Price" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Short Description" required />

                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="rating" id="rating" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Rating(out of 10)" required />

                    </div>
                    
                </div>

                <input type="submit" className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" value="Add Product"/>
            </form>

        </div>
    );
};

export default AddProduct;