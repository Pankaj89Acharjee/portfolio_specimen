import React, { useEffect, useState } from 'react'
import TestimonialApi from './TestimonialApi'
import './Testimonial.css'
import Slide from './SlideTest';

export const Testimonial = () => {
    const [data, setdata] = useState(TestimonialApi);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = data.length - 1 /*Total elements in TestimonialApi.js*/
        if(index < 0) {
            setIndex(lastIndex); /*Again initialiszing to highest value after index is near to 0*/
        } 
        if(index > lastIndex) {
            setIndex(0);
        }
    }, [index, data])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 3000)
        return () => clearInterval(slider)
    }, [index])

  return (

    <>
        <section className='testimonial' id = "testimonial">
            <div className='container' /*Main container*/>
                <div className='heading test-center uppercase' /*Heading*/>
                    <h4>JOB ROLE</h4>
                    <h1>Testimonials</h1>
                </div>

                <div className='slide' /*Sliding class under main container*/>
                    {data.map((value, valueIndex) => { 
                        return <Slide key = {value.id}
                        {...value} valueIndex = {valueIndex} index = {index}/>
                    })}

                    <div className='slide_button'>
                        <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                            <i class='fas fa-arrow-left'></i>
                        </button>
                        <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                            <i class='fas fa-arrow-right'></i>
                        </button>
                    </div>                
                </div>
            </div>
        </section>
        
 
    </>
  )  
}

export default Testimonial;