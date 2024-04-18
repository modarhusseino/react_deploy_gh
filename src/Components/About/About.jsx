import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import modar2 from '../../assets/modar2.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className='image' src={modar2} alt=""  />
        </div>
        <div className="about-right">
          <div className="about-para">
          <p>I'm an experienced Frontend Developer with over a decade of  professional expertise in the field. Throughout my career, I have had previllege of colloborating with prestigious organizations, contributing to their success and growth. </p>
          <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project. </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML && CSS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>BOOTSTRAP</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>GIT && GITHUB</p><hr style={{width:"56%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-acheivments">
        <div className="about-acheivment">
          <h1>+10</h1>
          <p>Years Experience</p>
        </div>
        <hr/>
        <div className="about-acheivment">
          <h1>+5</h1>
          <p>Project Completed</p>
        </div>
        <hr/>
        <div className="about-acheivment">
          <h1>+15</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
    

    
  )
}

export default About