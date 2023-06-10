import React from 'react';
import gptlogo from '../../assets/GPT-3.svg';
import './footer.css';


function Footer() {
  return (
    <div className='gpt__footer section__padding'>
      <div className="gpt__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future bofore others</h1>
      </div>
      <div className="gpt__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt__footer-links">
        <div className="gpt__footer-links__logo">
          <img src={gptlogo} alt="logo" />
          <p>Nairobi 00100, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt__footer-links__div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt__footer-links__div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt__footer-links__div">
          <h4>Get in touch</h4>
          <p>Nairobi 00100</p>
          <p>+254712345678</p>
          <p>info@kago.net</p>
        </div>
      </div>
      <div className="gpt__footer-copyright">
        <p>@2023 Open AI. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer