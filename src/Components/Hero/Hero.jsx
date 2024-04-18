import React from 'react'
import './Hero.css'
import modar from '../../assets/modar.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='about' className='hero'>
      <img src={modar} alt="" />
        <h1><span>I'm Modar Husseino,</span>Frontend developer based in Turkey</h1>
        <p>I'm Frontend developer, I gained skills like Html, Css Bootstrap, Javascript,Git,Github and React. I develop myself within designing blog and static websites. I work as freelancer dealing with customers from everywhere of the world</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>

    
  )
}

export default Hero