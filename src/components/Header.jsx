import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <img src='img/u2_state0.jpg' className='background-image' />
      <div className='header-content'>
        <div className='header-title'>
          <img src='img/logo_navbar_u70.png' />
          <h1>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
          <button>Download</button>
        </div>
        <div className='form-create'>
          <div>
            <p>Try Your <span className='free'>FREE</span> Trial Today</p>
            <form action="" className='form'>
              <input type="text" name="" id="" placeholder='Name' />
              <input type="text" name="" id="" placeholder='Email' />
              <input type="text" name="" id="" placeholder='Password' />
            </form>
            <button>Get Started</button>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header
