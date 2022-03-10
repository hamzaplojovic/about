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
            <h1 className="heading">Hamza Plojovic</h1>
        </div>
    );
};

Home.propTypes = {};

export default Home;
