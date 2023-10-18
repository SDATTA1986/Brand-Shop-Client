import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { image, name } = brand || {};
    return (
        <Link to={`/brand/${name}`}>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl mb-5">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className=" ">
                        <h2 className="text-5xl text-center bg-green-600  hover:bg-green-700 text-white mt-4 rounded-lg">{name}</h2>


                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Brand;
