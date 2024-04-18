import React from 'react'
import './Footer.css'
import logo from '../../assets/logo-png.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt=""  />
          <p>I'm Frontend Developer, from Turkey I gained skills like Html, Css Bootstrap, Javascript,Git,Github and React. I develop myself within designing blog and static websites. I work as freelancer dealing with customers from everywhere of the world</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email here' name='email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">©2024, Modar Husseino, All rights reserved</p>
        <div className="footer-bottom-right">
        <p>Term of services</p>
        <p>Privacy policy</p>
        <p>Connect with me</p>
      </div>
      </div>
      

    </div>
  )
}

export default Footer