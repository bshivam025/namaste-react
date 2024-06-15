import { useState } from 'react';
import {HEADER_IMG_URL} from '../config/config';

let Header = () => {
    const LoginOutState = useState('Login');
    const LoginOut = LoginOutState[0];
    const setLoginOut = LoginOutState[1];
    return (
        <div className = 'header'>
            <div className = 'header-logo'>
                <img src = {HEADER_IMG_URL}/>
            </div>
            <div className = 'header-title'>
                <h1>Swagiee</h1>
            </div>
            <div className = 'nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className={`loginLogoutBtn ${LoginOut}`} onClick={
                        function () {
                            LoginOut === 'Login' ? setLoginOut('Logout') : setLoginOut('Login');
                        }
                    }>{LoginOut}</button></li>
                </ul>
            </div>
        </div>
    )

}
export default Header;