import React from 'react'
import './style.scss'
import linkedinicon from '../../images/social/LinkedIn.svg'
import githubicon from '../../images/social/Github.svg'
import whatsappicon from '../../images/social/WhatsApp.svg'


const Footer = () => {
    return (
    <footer className='footer'> 
      <div className='socials'> 
      <a href='https://www.linkedin.com/in/pedrosehn/' target='_blank' rel="noreferrer"> 
        <img className='social-icon' src={linkedinicon} alt='linkedin icon'/> 
      </a>
      <a href='https://github.com/PedroSehn' target='_blank' rel="noreferrer">
        <img className='social-icon' src={githubicon} alt='github icon'/>
      </a>
      <a href='https://wa.me/5551984574823' target='_blank' rel="noreferrer">  
        <img className='social-icon' src={whatsappicon} alt='whatsapp icon'/>
      </a>
      </div>
      <div className='info'> © 2022 - Pedro Sehn </div>
    </footer>);
};

export default  Footer
 