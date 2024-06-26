import { useState } from 'react';
import { HEADER_IMG_URL } from '../config/config';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { AiOutlineShoppingCart, AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai';

const Header = () => {
  const [LoginOut, setLoginOut] = useState('Login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className='header flex justify-between items-center p-4 bg-orange-400 shadow-lg'>
      <div className='header-logo w-56'>
        <img src={HEADER_IMG_URL} alt="Logo" className='h-16' />
      </div>
      <div className='header-title font-extrabold text-2xl'>
        <h1>Swagiee</h1>
      </div>
      <div className='nav-items'>
        <ul className='flex items-center space-x-6'>
          <li className='px-1'>
            Online Status: {onlineStatus ? '✅' : '❌'}
          </li>
          <li className='px-1'>
            <Link to='/' className='flex items-center space-x-1 hover:text-white transition'>
              <AiOutlineHome className='text-xl' />
              <span>Home</span>
            </Link>
          </li>
          <li className='px-1'>
            <Link to='/About' className='flex items-center space-x-1 hover:text-white transition'>
              <AiOutlineInfoCircle className='text-xl' />
              <span>About Us</span>
            </Link>
          </li>
          <li className='px-1'>
            <Link to='/Contact' className='flex items-center space-x-1 hover:text-white transition'>
              <AiOutlineContacts className='text-xl' />
              <span>Contact Us</span>
            </Link>
          </li>
          <li className='px-1'>
            <div className='flex items-center space-x-1 hover:text-white transition'>
              <AiOutlineShoppingCart className='text-xl' />
              <span>Cart</span>
            </div>
          </li>
          <li className='px-1'>
            <button 
              className='bg-white text-orange-400 px-4 py-2 rounded-full hover:bg-orange-300 hover:text-white transition'
              onClick={() => setLoginOut(LoginOut === 'Login' ? 'Logout' : 'Login')}
            >
              {LoginOut}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
