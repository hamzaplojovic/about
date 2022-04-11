import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="about-main">
            <div className="home-text">
                <h1 className="heading">hamzaplojovic.</h1>
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
