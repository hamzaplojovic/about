import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#" className="a2">
                <h1>Home</h1>
            </a>
            <div className="navbar-div">
                <a href="#about" className="a2">
                    <h2>About</h2>
                </a>
                <a href="#projects" className="a2">
                    <h2>Projects</h2>
                </a>
                <a href="#contact" className="a2">
                    <h2>Contact</h2>
                </a>
            </div>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
