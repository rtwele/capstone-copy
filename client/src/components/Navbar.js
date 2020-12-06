import React from 'react';
import { NavLink, Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <header>
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <a href="/">Home</a>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                    <li><Link to="/about">About</Link></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/addattraction">Add Attraction</NavLink></li>
                    <li><NavLink to="/viewattractions">View Attractions</NavLink></li>
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
        </header>
    )
}

export default Navbar