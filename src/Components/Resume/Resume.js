import React from 'react'
import ResumeApi from './ResumeApi'
import ResumeCard from './ResumeCard'
import './Resume.css'

export const Resume = () => {
  return (
    <>
        <section className='resume' id = "resume">
            <div className='container top' /*Main container*/>
                <div className='heading text-center uppercase' /*Heading section*/>
                    <h4>3+ Years of work Experience</h4>
                    <h1>My Resume</h1>
                </div>

                <div className='content-section mtop d_flex' /*Container head class stores all in flex type format*/>
                    <div className='leftB' /*Left section child*/>
                        <div className='heading' /*Header*/>
                            <h4>2010-2013</h4>
                            <h1>Academic Qualification</h1>
                        </div>

                        <div className='content' /*Mapping details from ResumeApi.js*/>
                            {ResumeApi.map((val, index) => {
                                if(val.category === "education") {
                                    return <ResumeCard key = {index}
                                    title = {val.title}
                                    year = {val.year}
                                    desc = {val.desc}
                                    percentage = {val.percentage}
                                    rate = {val.rate}
                                    />
                                }
                            })}
                        </div>
                    </div> {/*End of left section child*/}

                    <div className='left'>
                        <div className='heading' /*Header*/>
                            <h4>2014-2022</h4>
                            <h1>Job Experience</h1>
                        </div>

                        <div className='content' /*Container for Job experience*/>
                            {ResumeApi.map((val, data) => {
                                if(val.category === "experience") {
                                    return <ResumeCard key = {data}
                                    title = {val.title}
                                    year = {val.year}
                                    desc = {val.desc}
                                    percentage = {val.percentage}
                                    rate = {val.rate}
                                    />
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume;
