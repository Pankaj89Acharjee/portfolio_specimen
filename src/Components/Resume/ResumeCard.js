import React from 'react'


export const ResumeCard = (props) => {
  return (
      <>
        <div className='box btn_shadow'>
            <div className='title_content d_flex' /*Title container*/>
                <div className='title'>
                    <h2>{props.title}</h2> <br/>
                    <span>{props.year}</span>
                </div>

                <div className='percentage'>
                    <button className='btn_shadow'>{props.percentage ? props.percentage : props.rate}</button>
                </div>
            </div>

            <hr />

            <p className='description'>{props.desc}</p>
            {/*end of box container*/}
        </div >
      </>
    
  )
}

export default ResumeCard;
