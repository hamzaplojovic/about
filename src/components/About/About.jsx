import "./About.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="about" id="about">
            <h1>About</h1>
            <hr />
            <div className="links">
                <a
                    href="https://www.codewars.com/users/hamzaplojovic"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1>Codewars</h1>
                </a>
                <a
                    href="https://stackoverflow.com/users/17927225/hamza-plojovic"
                    data-aos="fade-right"
                    data-aos-duration="1750"
                >
                    <h1>StackOverflow</h1>
                </a>
                <a
                    href="https://www.upwork.com/nx/find-work/best-matches"
                    data-aos="fade-right"
                    data-aos-duration="2500"
                >
                    <h1>Upwork</h1>
                </a>
                <a
                    href="https://www.hackerrank.com/dashboard"
                    data-aos="fade-right"
                    data-aos-duration="2800"
                >
                    <h1>HackerRank</h1>
                </a>
            </div>
        </div>
    );
};

export default About;
