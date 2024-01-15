import React from 'react'
import {Link} from 'react-scroll'

export default function Navbar(){
    return(
    <div className="navbar">
        <Link to="home" smooth={true} duration={500}>Introduction</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="workexp" smooth={true} duration={500}>Work Experience</Link>
    </div>
    )
}