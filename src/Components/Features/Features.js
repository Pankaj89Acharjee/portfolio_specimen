import React from 'react'
import './Features.css'
import Card from './Card'
import data from './FeaturesApi'


export const Features = () => {
  return (
   <>
        <section className='features top' id ="features">
            <div className='container'>
                <div className='heading text-center'>
                    <h4>Features</h4><br/>
                    <h1>What I build</h1>
                </div>

                <div className='content grid'>
                    {data.map((val, index) => {
                        return <Card key={index}
                        image = {val.image}
                        title = {val.title}
                        description = {val.description}/>
                    })}                
                </div>
            </div>
        </section>
   
   </>
  )
}

export default Features;
