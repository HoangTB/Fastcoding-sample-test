import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-title'>
        <h2>CONTACT US</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <form action="" className='contact-form'>
        <div className='contact-content'>
          <div className='contact-input'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Subject' />
          </div>
          <textarea name="" id="" cols="20" rows="8" placeholder='Message'></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs
