import Lottie from 'lottie-react';
import notFoundError from '../../assets/lottie/404.json'
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <Lottie animationData={notFoundError} loop={true} autoplay={true} className='w-8/12'/>
            <Link to={'/'} className='btn bg-[#8550fb] text-white font-semibold'>Go Home</Link>
        </div>
    );
};

export default NotFound;