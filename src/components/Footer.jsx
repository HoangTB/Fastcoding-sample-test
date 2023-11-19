import React from 'react'
import './Footer.css'
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {TfiGoogle} from "react-icons/tfi";
import {FaPinterest} from "react-icons/fa";
import {ImInstagram} from "react-icons/im";
import {FaRss} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <FaFacebookF />
        <FaTwitter />
        <TfiGoogle />
        <FaPinterest />
        <ImInstagram />
        <FaRss />
      </div>
      <p>© 2021 Axure Themes</p>
    </footer>
  )
}

export default Footer
