import React from 'react'
import './Home.css'
import hero from '../Pictures/hero.png'
import skill1 from '../Pictures/skill1.png'
import skill2 from '../Pictures/skill2.png'
import skill3 from '../Pictures/skill3.png'
import { Typewriter} from 'react-simple-typewriter'

export const Home = () => {
  return (
      <>
        <section className='hero' id= 'home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY PROFILE</h3>
                    <h1>Hi There!<span> I'm Pankaj</span></h1>
                     <div>
                        <h2>A
                            <span className='spanContent'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={[' Programmer ', ' Professional Coder ', ' Full Stack Developer ', ' Data Manager ']}
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                
                                />
                            </span>
                        </h2>
                      </div>
                      <div className='paragraph'> 
                        <p>Looking for an enviroment where knowlegde can be utilized and 
                            gradually hone skills according to the industrial requirements.
                            Working in a time constraint is the upmost priority so that the
                            product can be delivered in a fashionable condition and satisfaction.                            
                        </p>
                    </div>
                    <div className='hero_btn d_flex' /*For social-media icons*/>
                        <div className='col_1 uppercase'>
                            <h4>Find me</h4>
                            <div className='button'>
                                <button className='btn_shadow'>
                                    <i className='fab fa-facebook'/>
                                </button>

                                <button className='btn_shadow'>
                                    <i className='fab fa-linkedin'/>
                                </button>

                                <button className='btn_shadow'>
                                    <i className='fab fa-instagram'/>
                                </button>
                            </div>
                        </div>

                        <div className='col_2'>
                            <h4>BEST SKILLS</h4>
                            <div className='button'>
                            <button className='btn_shadow'>
                                <img src={skill1} alt = {skill1}/>
                            </button>

                            <button className='btn_shadow'>
                                <img src={skill2} alt = {skill2}/>
                            </button>

                            <button className='btn_shadow'>
                                <img src={skill3} alt = {skill3}/>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='right'>
                    <div className='right_img'>
                        <img src = {hero} alt={hero}/>
                    </div>
                </div>
            </div>
        </section>
      </>
  
  )
}

export default Home;
