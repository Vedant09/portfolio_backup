import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import Elements from './Elements'
import items from '../DataFiles/ProjectsData'

function Card() {

    const elementsDetails = items.map(items => {
      return (
        <Elements
          id= {items.id}
          items={items}
        />
      )
    })
  
    return (
      <div className='card-div'>
        {elementsDetails}
      </div>
    )
    
  }

export default function Projects(){
    
    return(
        <div className='project-section' id='projects'>
            <SectionTitle
                header = 'PROJECTS.'
                sub_header = 'MY'
            />
            <Card/>
        </div>
    )
}