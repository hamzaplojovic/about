import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import { ReactComponent as YourSvg } from "/Users/hamzaplojovic/Desktop/Desktop/Projects/React-About/my-app/src/components/img/github.svg";
import { ReactComponent as YourSvg1 } from "/Users/hamzaplojovic/Desktop/Desktop/Projects/React-About/my-app/src/components/img/hackerrank.svg";
import { ReactComponent as YourSvg2 } from "/Users/hamzaplojovic/Desktop/Desktop/Projects/React-About/my-app/src/components/img/upwork.svg";

export const MyComponent = () => (
    <motion.div animate={{ rotate: 720 }} transition={{ duration: 1.5 }}>
        <a href="https://www.github.com/hamzaplojovic">
            <YourSvg />
        </a>
    </motion.div>
);

export const MyComponent1 = () => (
    <motion.div animate={{ rotate: 1440 }} transition={{ duration: 2 }}>
        <a href="https://www.hackerrank.com/test08869">
            <YourSvg1 />
        </a>
    </motion.div>
);

export const MyComponent2 = () => (
    <motion.div animate={{ rotate: 1800 }} transition={{ duration: 2.5 }}>
        <a href="https://www.upwork.com/freelancers/~0140264152a90ee19d">
            <YourSvg2 />
        </a>
    </motion.div>
);

const Home = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="about-main">
            <h1 className="heading">Hamza Plojovic</h1>
            <div className="icons">
                <MyComponent />
                <MyComponent1 />
                <MyComponent2 />
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
