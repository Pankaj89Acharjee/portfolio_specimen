import React from 'react'
import Port from './Port'
import Portfolio_data from './Portfolio_data'
import './Portfolio.css'

export const Portfolio = () => {
  return (
      <>
        <section className='portfolio top' id = 'portfolio'>
            <div className='container'>
                <div className='heading text-center'>
                    <h4>PORTFOLIO SECTION</h4>
                    <h1>Visit My Portfolio</h1>
                </div>

                <div className='content grid'>
                    {Portfolio_data.map((value, index) => {
                        return  <Port key={index}
                                          image = {value.image} alt={value.image}
                                          category = {value.category}
                                          totalLike = {value.totalLike}
                                          title = {value.title}/>
                    })}
                    
                   
                </div>
            </div>
        </section>
            
      </>
    
  )
}

export default Portfolio;
