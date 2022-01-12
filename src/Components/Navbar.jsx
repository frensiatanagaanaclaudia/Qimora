import React,{useState} from 'react';
import {Link} from 'react-scroll';
import logo1 from '../images/logo1.png'

function Navbar() {

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='main' className='logo'>
                <img src={logo1} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <h3>Have account ?</h3>
                <li><Link to="main">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
