import Lottie from 'lottie-react';
import loaderAnimation from '../../assets/lottie/Confetti.json'

const Loader = () => {
    return (
        <div>
            <Lottie animationData={loaderAnimation} loop={true} autoplay={true} className='w-3/12 mx-auto'/>
        </div>
    );
};

export default Loader;