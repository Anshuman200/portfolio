import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
const Footer = () => {
  return (
      <div className="footer">
          <img src={Wave} alt="" style={{width:'100%'}} />
          <div className="f-content">
              <span>Anshumaansingh836@gmail.com</span>
              <div className="f-icons">
                  <Instagram  color='white' size='2rem'/>
                  <Facebook  color='white' size='2rem'/>
                  <Github  color='white' size='2rem'/>
                  <LinkedIn  color='white' size='2rem'/>
                  {/* Facebook
                  https://www.facebook.com/home.php
                   */}
              </div>
          </div>
      </div>
  )
}

export default Footer