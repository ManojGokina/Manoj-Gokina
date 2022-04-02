import React from 'react';
import "./Header.css"
import logo from '../../Images/logo.svg';

function Header(){
  return (
    <nav className='navbar'>
        <div className='logo__container'>
        <img src={logo} alt='logo'/>
        </div>

        <div className='navlinks'>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>More</li>
            </ul>

            <button>Need a website?</button>
        </div>
    </nav>
  )
}

export default Header