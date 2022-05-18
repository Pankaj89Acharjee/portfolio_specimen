import React from 'react'


export const Card = (props) => {
  return (
    <div>
        <div className='box btn_shadow'>
            <img src = {props.image} alt = {props.image}/>
            <h2>{props.title}</h2>
            <p>
                {props.description}         
            </p>

            <a href = "/">
                <i className='fas fa-arrow-right'/>
            </a>
        </div>
    </div>
  )
}

export default Card;