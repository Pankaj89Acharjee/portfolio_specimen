import React, { useState } from 'react'
import "./Header.css"
import MyPhoto from '../Pictures/MyPhoto.jpg'


export const Header = () => {
    /*Header menu to remain intact at the initial position, 
    when we scroll up the page. "active" is the classname */
    
    window.addEventListener('scroll', function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    /*End of Header Scrolling constant*/

    /*Toggle Menus starts*/
    const [mobile, setMobile] = useState(false);
 
    /*Toggle menu ends*/


  return (
    
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo' >
                    <img  className='logoimg' src={MyPhoto} alt=''/>
                </div>

                <div className='navlink'>
                    <ul className= {mobile ? 'nav-links-mobile' : 'link f_flex uppercase'}
                                     onClick={() => setMobile(false)}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#resume">Resume</a></li>
                        <li><a href="clients">Clients</a></li>
                        <li><a href="projects">Projects</a></li>
                        <li><a href="contact">Contact</a></li>
                        <li><button className='home-btn'>ORDER</button></li>
                    </ul>
                    <button className='toggle' onClick={() => setMobile(!mobile)}>
                        { /*If mobile is true, then render the following*/
                            mobile ? 
                            <i className='fas fa-times close home-btn'/>
                                   : 
                            <i className='fas fa-bars open'/>
                        }
                        
                    </button>
                </div>

            </div>
        </header>

        <section className='demo'></section>
    </>
  )
};

export default Header;
