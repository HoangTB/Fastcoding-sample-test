import React from 'react'
import './OurProcess.css'
import {FaRegLightbulb} from "react-icons/fa";
import {TiKeyboard} from "react-icons/ti";
import {AiFillThunderbolt} from "react-icons/ai";

const OurProcess = () => {
  return (
    <div className='our' id='about'>
      <div className='our-top'>
        <h2>WHY THIS IS AWESOME</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='our-bottom'>
        <div className='our-content our-content-left'>
          <button><FaRegLightbulb className='icon' /></button>
          <h3>Thoughtful Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra.</p>
        </div>
        <div className='our-content our-content-center'>
          <button><TiKeyboard className='icon' /></button>
          <h3>Well Crafted</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra.</p>
        </div>
        <div className='our-content our-content-right'>
          <button><AiFillThunderbolt className='icon' /></button>
          <h3>Easy to Customize</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aenean euismod bibendum laoreet. Proin gravida
            dolor sit amet lacus accumsan et viverra.</p>
        </div>
      </div>
    </div>
  )
}

export default OurProcess
