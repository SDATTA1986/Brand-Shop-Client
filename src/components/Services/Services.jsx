import React from 'react';
import { FaWrench,FaCube,FaExchangeAlt} from "react-icons/fa";
const Services = () => {
    return (
        <div className="grid grid-cols-3 gap-10 my-20" >

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <div className="">
                    <div className='flex justify-center'>
                    <FaWrench className="text-3xl mb-3 hover:text-green-700"></FaWrench>
                    </div>
                    <a href="#">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Gadget Repair & Service Center</h5>
                    </a>
                </div>
                
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">Need a quick fix for your malfunctioning electronic device? Reach out to our specialized gadget repair and service center. Skilled technicians ensure efficient repairs, providing a reliable solution to bring your gadget back to optimal performance</p>
                
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <div className="">
                    <div className='flex justify-center'>
                    <FaCube className="text-3xl mb-3 hover:text-green-700"></FaCube>
                    </div>
                    <a href="#">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Electronic Gadgets Subscription Box</h5>
                    </a>
                </div>
                
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">Unbox the latest in tech innovation every month! Subscribe to GadgetBox and receive a curated selection of premium electronic gadgets, accessories, and tech-savvy items. Stay ahead of the game with exciting surprises delivered to your doorstep.</p>
                
            </div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
                <div className="">
                    <div className='flex justify-center'>
                    <FaExchangeAlt className="text-3xl mb-3 hover:text-green-700"></FaExchangeAlt>
                    </div>
                    <a href="#">
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white  mx-auto text-center hover:text-green-700">Electronics Trade-In and Buyback</h5>
                    </a>
                </div>
                
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify max-w-[300px] mx-auto">Upgrade your gadgets hassle-free! Trade in your old electronics for newer models or receive cash for your used devices. Our platform ensures fair evaluations and offers a sustainable way to recycle and contribute to the tech ecosystem</p>
                
            </div>
           

        </div>
    );
};

export default Services;