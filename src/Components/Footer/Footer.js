import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div>
        <section className='footer'>       
            <div className='container top'>
                <div className='footerTitle text-center uppercase'>
                    
                    <h4>All rights reserved by the owner</h4>
                </div>

                <div className='footerContainer d_flex'>
                    <div className='footerLeft'>
                        
                        <div className='linkLists'>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="clients">Clients</a></li>
                            <li><a href="projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        </div>
                    </div>
          
                    <div className='footerMiddle'>
                    
                        <div className='buttonA foot_flex'>
                            <button className='btn_shadow fb'>
                                <i className='fab fa-facebook-f'/>
                            </button>

                            <button className='btn_shadow fb'>
                                <i className='fab fa-instagram'/>
                            </button>

                            <button className='btn_shadow fb'>
                                <i className='fab fa-twitter'/>
                            </button>
                        </div>
                </div>

                <div className='footerRight'>
                    
                        <div className='button f_flex'>
                            <button className='btn_shadow fb'>
                                <i className='fab fa-node-js'/>
                            </button>

                            <button className='btn_shadow fb'>
                                <i className='fab fa-github'/>
                            </button>

                            <button className='btn_shadow fb'>
                                <i className='	fab fa-cc-paypal'/>
                            </button>                            
                        </div>
                </div>
            </div>
          </div>
      
        </section>
    </div>
    
    
  )
}

export default Footer;
