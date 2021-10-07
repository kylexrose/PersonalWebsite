import React from 'react';
import './Nav.css';
import logo from '../pictures/customer-service-1433639_1920.png'

function Nav() {
    return (
        <div className="navbar">
            <div className="navLogo">
                <div className="logoLeft">
                    <img src={logo} className="logo"/>
                </div>
                <div className="logoRight">
                    <p className="navName">Kyle Rose</p>
                    <p className="navSnip">Full-Stack Web Developer and Designer</p>
                </div>
            </div>
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
