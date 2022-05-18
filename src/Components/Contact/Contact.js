import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import  contactImg from '../Pictures/contactMe.jpg'

export const Contact = () => {

    const formReference = useRef();
    const[msgSent, setmsgSent] = useState(false);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        window.alert("Thank you for contacting!")
        
        emailjs.sendForm(
            'service_jucb9gv', 
            'template_rx5pcsa', 
            formReference.current, 'user_eNbwh4SU7BwAD5cv4ztQ4')

            .then((result) => {
                console.log(result.text);
                setmsgSent(true);
            }, 
            (error) => {
                console.log(error.text);
            });         
    }


  return (
    <div>
        <section className='contact' id = "contact">
            <div className='container top'>
                <div className='heading text-center uppercase'>
                    <h4>CONTACT</h4>
                    <h1>Contact me?</h1>
                </div>

                <div className='content d_flex'>
                    <div className='left'>
                        <div className='box box-shadow'>
                            <img src = {contactImg} alt =''></img>
                        </div>

                        <div className='details'>
                            <h1>I am Pankaj!</h1>
                            <p>It would be glad to hear from you. Please feel free to contact me via email or phone.</p>
                            <p>Your imaginations are our concern to give it a shape in the real world</p>
                            <br />
                            <p>Phone: +918637594989</p>
                            <p>E-mail: pankaj2007acharjee@gmail.com</p>
                            <span>Find with me</span>
                            <div className='button f_flex'>
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
                    </div>

                    <div className='right '>
                        <form ref ={formReference} onSubmit = {formSubmitHandler}>
                            <div className='f_flex'>
                                <div className='right'>
                                    <div className='textBox'>
                                        <input type='text' placeholder='Your Name' name = "user_name" />
                                        <input type='text' placeholder='Subject' name = "user_subject"/>
                                        <input type='email' placeholder='E-mail' name = "user_email"/> 
                                        <textarea rows = "5" placeholder='Enter your message here' name = "message"/>
                                    </div>

                                    <div className='submitBtn'>                              
                                        <button className='btn_shadow'>SUBMIT NOW 
                                            <i className='fas fa-arrow-down'/>
                                        </button>
                                        {msgSent}
                                    </div>  
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
 export default Contact;
