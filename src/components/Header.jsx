import logo from '@/assets/logo.png'
import Image from 'next/image';
// import logo from '../assets/logo.png'
import { format } from "date-fns";
import BrakingNews from './shared/BrakingNews';


const Header = () => {
    return (
        <div className='text-center space-y-2'>
            <Image className='mx-auto mt-10' src={logo} alt='Logo'></Image>
            <p className='text-l text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEE, MMM dd, yyyy")}</p>
            <BrakingNews></BrakingNews>
        </div>
    );
};

export default Header;