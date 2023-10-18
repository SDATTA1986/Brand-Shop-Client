
import ecommerce from '../../assets/ecommerce.jpg'
const Banner = () => {
    return (
        <div className='max-w-6xl'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${ecommerce})` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-white">
                    <div className="max-w-[700px]">
                        <h1 className="mb-5 text-6xl font-bold">Online Evolution</h1>
                        <p className="mb-5 text-2xl ">Empowering Businesses, Expanding Horizons: Embrace the Digital Revolution with E-business</p>
                        <button className="btn bg-green-600 hover:bg-green-700 text-white font-light rounded-3xl border-0">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
