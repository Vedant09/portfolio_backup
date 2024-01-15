import React from 'react'

export default function SectionTitle(props){
    return(
        <div className='section-title'>
            <h1 className='name'>{props.header}</h1>
            <p>{props.sub_header}</p>
        </div>
    )
}