

const CartProduct = ({item}) => {
    const { image, name, state, type } = item || {};
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="py-2  text-green-700 text-5xl font-bold">{state}</p>
                        <p className="py-2">Type: {type}</p>


                        <button className="btn bg-green-600 hover:bg-green-700">Delete Item</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;