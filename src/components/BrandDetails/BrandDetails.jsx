import Navbar from "../Shared/Navbar";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.jpg'
import logo3 from '../../assets/logo3.jpg'
import DisplayProduct from "../DisplayProduct/DisplayProduct";
import { useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const { name } = useParams();
    console.log(name);
    const users=useLoaderData();
    console.log(users);
     const singleBrand = users.filter(user1 => user1.state === (name));
     console.log(singleBrand.length);
    const AutoplaySlider = withAutoplay(AwesomeSlider)
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-6xl'>

            <AutoplaySlider animation="cubeAnimation" play={true}
                    cancelOnInteraction={false}
                    interval={500} >

                    <div data-src={logo1}/>
                    <div data-src={logo2} />
                    <div data-src={logo3} />
                 
                </AutoplaySlider>
                {singleBrand.length>0? <div className="mt-[70px] grid grid-cols-2 gap-20">
                {
                    singleBrand.map(user => <DisplayProduct key={user._id} user={user} ></DisplayProduct>)
                }
                </div>: 
                <div className="mt-[70px]">
                    No Data to Display
                </div>
                }
                
            
        </div>
        </div>
    );
};

export default BrandDetails;