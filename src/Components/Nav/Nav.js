import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="navbar">
            <img className="expand"/>
            <div className="navRight">
                <div className="active-container linkContainer"><a href="#overview" className="navLink">Overview</a></div>
                <div className="linkContainer"><a href="#experience" className="navLink">Experience</a></div>
                <div className="linkContainer"><a href="#projects" className="navLink">Projects</a></div>
                <div className="linkContainer"><a href="#about" className="navLink">About</a></div>
                <div className="hireMe"><a href="#contact">Hire&nbsp;Me</a></div>

            </div>
        </div>
    )
}

export default Nav
