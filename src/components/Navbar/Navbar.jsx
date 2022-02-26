import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Home</h1>
            <div className="navbar-div">
                <a href="#about">
                    <h2>About</h2>
                </a>
                <h2>Projects</h2>
                <h2>Contact</h2>
            </div>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
