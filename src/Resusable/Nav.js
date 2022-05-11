import React from 'react';
import { useState } from 'react';
import Logo from '../Icons/Logo';
import Button from './Button';
import './Nav.css';
import Ham from '../Icons/Hamburger';
import Close from '../Icons/Close'

const Nav = () => {

    const [toggle, setToggle] = useState(false);

    function isToggle(params) {
        setToggle(!toggle)
    }

    return (
        <div className='nav-container'>
            <div className='logo'>
                <Logo />
            </div>

            <ul className='ul'>
                <li>
                    Pricing
                </li>

                <li>
                    Product
                </li>

                <li>
                    About us
                </li>

                <li>
                    Careers
                </li>

                <li>
                    Community
                </li>
            </ul>

            <Button words={'Get Started'} />

            
            <div className='ham-container' >
                <Ham onClick={isToggle}  className={toggle ? 'hide' : 'white-ham'}/>

                <Close onClick={isToggle} className={toggle ? 'shown' : 'hidden'} />
    
            </div>


            <div className={toggle ? 'mobile nav' : 'mobile'} >
                <ul className='mobile-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav