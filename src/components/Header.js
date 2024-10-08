import { useState, useContext } from 'react';
import { HEADER_IMG_URL } from '../config/config';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { AiOutlineShoppingCart, AiOutlineHome, AiOutlineInfoCircle, AiOutlineContacts } from 'react-icons/ai';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';


const Header = () => {
  const [LoginOut, setLoginOut] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const {loggenInUser} = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items)
  console.log("🫡 ~ Header ~ cart:", cart);

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
            <Link to='/Cart' className='flex items-center space-x-1 hover:text-white transition'>
              <AiOutlineShoppingCart className='text-xl' />
              <span>Cart {cart.length > 0 ? '('+cart.length+ ')': ''}</span>
            </Link>
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
          <li className='px-1'>
            <div className='flex items-center space-x-1 hover:text-white transition'>
              <span>{loggenInUser}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
