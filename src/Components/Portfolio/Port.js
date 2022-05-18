import React, {useState} from 'react'

export const Port = (props) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }
    
    return (
        <>
        <div className='box btn_shadow'>
            <div className='img'>
                <img src={props.image} alt='' onClick={toggleModal} />
            </div>

            <div className='category d_flex'>
                <span onClick={toggleModal}>{props.category}</span>
                <label className='like-btn'>
                    <i className='far fa-heart'></i> {props.totalLike}
                </label>
            </div>


            <div className='title'>
                <h2 onClick={toggleModal}>{props.title}</h2>
                <a href='#popup' className='arrow' onClick={toggleModal}>
                    <i class='fas fa-arrow-right'></i>
                </a>
            </div>
        </div> 
    
        { /*Popup box and functionality*/}

        {
            modal && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal}>
                        <div className='modal-content d_flex'>
                            <div className='modal-img left'>
                                <img src = {props.image} alt={props.image}/>
                            </div>

                            <div className='modal-text right'>
                                <span>Designs and Features</span>
                                <h1>{props.title}</h1>
                                <p>This section is a paragraph section and will be filled up later according to the features of the design</p>
                                <div className='button f_flex mtop'>
                                    <button className='btn_shadow'>
                                        LIKE <i class = 'far fa-thumbs-up'/>
                                    </button>

                                    <button className='btn_shadow'>
                                        VIEW PROJECT <i class = 'fa fa-chewron-right'/>
                                    </button>                            
                                </div>

                                <button className='close-modal btn_shadow'
                                        onClick={toggleModal} /*For close button*/>
                                            <i className='fas fa-times'/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    
    
        </>
    )
}

export default Port;
