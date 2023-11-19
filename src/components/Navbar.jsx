import React, {useState} from 'react';
import {FaList} from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <a href="/"><img src='img/logo_navbar_u70.png' alt='Logo' /></a>
      </div>
      <div>
        <ul className={`nav-list ${isMenuOpen ? 'show' : 'hide'}`}>
          <li><a href="#feature">Features</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <FaList className='list-menu' onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
