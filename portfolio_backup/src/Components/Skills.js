import React from 'react'
import SectionTitle from './SectionTitle'
import items from '../DataFiles/SkillsData'

function Items(props) {
    return ( 
          <div className='skillcard-div'>
              <div className='skillcards-each'>
                <h2 className='project-name'>{props.items.name}</h2>
                <div className='skill-box'>
                {props.items.skills && props.items.skills.map((skill, index) => (
                    <h4 key={index}>{skill}</h4>
                ))}
                </div>
            </div>
        </div>
    )
} 
function SkillCard() {

    const elementsDetails = items.map(items => {
      return (
        <Items
          id= {items.id}
          items={items}
        />
      )
    })
  
    return (
      <div className='skillcard-div'>
        {elementsDetails}
      </div>
    )
    
  }

export default function Skills(){
    return(
        <div className='skills-section' id='skills'>
            <SectionTitle
                header = 'SKILLS.'
                sub_header = "TECHNICAL"
            />
            <SkillCard/>
        </div>
    )
}