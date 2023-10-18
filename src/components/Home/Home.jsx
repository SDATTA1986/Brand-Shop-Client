import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar";
import Brand from "../Brand/Brand";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import ContactUs from "../Contact/ContactUs";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">OUR BRANDS</h2>
                <hr className="border border-solid border-black w-[100px] mx-auto"/>

            </div>
            <div className="mt-[70px] grid grid-cols-3 gap-10">
                {
                    brands && brands?.map(brand => <Brand key={brand.id} brand={brand} ></Brand>)
                }
            </div>
            <div>
                <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">OUR SERVICES</h2>
                <hr className="border border-solid border-black w-[100px] mx-auto"/>

            </div>
            <Services></Services>
            <div>
                <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">CONTACT US</h2>
                <hr className="border border-solid border-black w-[100px] mx-auto"/>

            </div>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;