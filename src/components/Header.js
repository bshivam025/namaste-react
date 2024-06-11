import {HEADER_IMG_URL} from '../config/config';

let Header = () => {
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
                </ul>
            </div>
        </div>
    )

}
export default Header;