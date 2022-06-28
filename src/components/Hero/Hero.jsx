import React from 'react'
import "./Hero.scss" 
import '../../shared/Global.scss'
import resume from '../../assets/WilliamLaResume.pdf'


export const Hero = () => {
  return (
    <section id="hero">
      
        <div className='hero-content'>
          
          <h2>Hi There!</h2>
          <h1>I'm William La.</h1>
          <p>An aspiring Web Developer with a passion for learning and creating new things.</p>
          <div className='hero-links'>
            <a href={resume} target="_blank" without rel="noopener noreferrer">
              <button>Resume</button>
            </a>
            <a className="mid-link" href="https://www.linkedin.com/in/williamla59/">Linkedin</a>
            <a href="https://github.com/WilliamLa59">Github</a>
          </div>
        </div>
       

    </section>
    
  )
}

