import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar";
import Brand from "../Brand/Brand";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import ContactUs from "../Contact/ContactUs";
import { useState } from "react";


const Home = () => {
    const brands = useLoaderData();
    const [theme, setTheme] = useState(true);

    return (
        <html data-theme={theme ? "light" : "valentine"}>
            <div>
                <Navbar></Navbar>
                <div className="flex justify-center ">
                    <button onClick={() => setTheme(!theme)} className="btn bg-green-600 hover:bg-green-700">Change Theme</button>
                </div>
                <Banner></Banner>
                <div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">OUR BRANDS</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <div className="mt-[70px] grid grid-cols-3 ">
                    {
                        brands && brands?.map(brand => <Brand key={brand.id} brand={brand} ></Brand>)
                    }
                </div>
                <div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">OUR SERVICES</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <Services></Services>
                <div>
                    <h2 className="text-5xl text-center mx-auto font-bold  py-4 mt-40 w-[600px] ">CONTACT US</h2>
                    <hr className="border border-solid border-black w-[100px] mx-auto" />

                </div>
                <ContactUs></ContactUs>
                <Footer></Footer>

            </div>
        </html>
    );
};

export default Home;