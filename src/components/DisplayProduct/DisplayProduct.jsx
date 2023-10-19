

const DisplayProduct = ({ user }) => {
    const { image, name, state, type,price,rating } = user || {};
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="py-2  text-green-700 text-5xl font-bold">{state}</p>
                        <p className="py-2">Type: {type}</p>
                        <p className="py-2">Price: {price}</p>
                        <p className="py-2">Rating: <span className="text-2xl font-bold">{rating}</span>/10</p>
                        <div className="flex gap-2">
                        <button className="btn bg-green-600 hover:bg-green-700">View Details</button>
                        <button className="btn  bg-green-600 hover:bg-green-700">Update Product</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;