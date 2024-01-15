import React from 'react'

export default function Elements(props) {
    function goto() {
        window.open(props.items.link, '_blank');
      }
    return ( 
          <div className='card-div' onClick={goto}>
              <div className='cards-each'>
                <img className='project-image' src={props.items.img} alt="img"/>
                <h3 className='project-name'>{props.items.type}</h3>
                <p>{props.items.city}</p>
            </div>
        </div>
    )
} 