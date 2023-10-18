import Navbar from "../Shared/Navbar";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import logo1 from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.jpg'
import logo3 from '../../assets/logo3.jpg'

const BrandDetails = () => {
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
            
        </div>
        </div>
    );
};

export default BrandDetails;