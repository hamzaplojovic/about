import React, { useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
    return (
        <div
            className="card"
            data-aos={props.aos}
            data-aos-duration={props.duration}
        >
            <h1>{props.name}</h1>
            <a className="link" href={"https://" + props.link}>
                <h5>{props.link}</h5>
            </a>
            <h4>{props.desc}</h4>
        </div>
    );
};

const ProjectsTablet = () => {
    return (
        <div className="projects2" id="projects2">
            <h1 className="about-heading">Projects</h1>
            <div className="cards">
                <Card
                    name="hamzaplojovic"
                    desc="This is about readme for github."
                    link="github.com/hamzaplojovic/hamzaplojovic"
                    aos="fade-down"
                    duration="700"
                />
                <Card
                    name="Lua"
                    desc="This is Lua course that i am going to."
                    link="github.com/hamzaplojovic/Lua"
                    aos="fade-down"
                    duration="900"
                />
            </div>
            <div className="cards">
                <Card
                    name="Todo"
                    desc="Todo app to make yourself more organized."
                    link="github.com/hamzaplojovic/React-Todo"
                    aos="fade-down"
                    duration="1100"
                />
                <Card
                    name="Auto Clicker"
                    desc="This is python bot that clicks 100 cps"
                    link="github.com/hamzaplojovic/auto-clicker"
                    aos="fade-up"
                    duration="1300"
                />
            </div>
            <div className="cards">
                <Card
                    name="mojnovipazar"
                    desc="Website for the old memorials of Novi Pazar."
                    link="github.com/hamzaplojovic/mojovipazar-rs"
                    aos="fade-up"
                    duration="1500"
                />
                <Card
                    name="Travello"
                    desc="Template for travel company."
                    link="github.com/hamzaplojovic/Travel-Website"
                    aos="fade-up"
                    duration="1700"
                />
            </div>
        </div>
    );
};

const ProjectsPhone = () => {
    return (
        <div className="projects3" id="projects3">
            <h1 className="about-heading">Projects</h1>
            <div className="cards">
                <Card
                    name="hamzaplojovic"
                    desc="This is about readme for github."
                    link="github.com/hamzaplojovic/hamzaplojovic"
                    aos="fade-down"
                    duration="700"
                />
            </div>
            <div className="cards">
                <Card
                    name="Lua"
                    desc="This is Lua course that i am going to."
                    link="github.com/hamzaplojovic/Lua"
                    aos="fade-down"
                    duration="900"
                />
            </div>
            <div className="cards">
                <Card
                    name="Todo"
                    desc="Todo app to make yourself more organized."
                    link="github.com/hamzaplojovic/React-Todo"
                    aos="fade-down"
                    duration="1100"
                />
            </div>
            <div className="cards">
                <Card
                    name="Auto Clicker"
                    desc="This is python bot that clicks 100 cps"
                    link="github.com/hamzaplojovic/auto-clicker"
                    aos="fade-up"
                    duration="1300"
                />
            </div>
            <div className="cards">
                <Card
                    name="mojnovipazar"
                    desc="Website for the old memorials of Novi Pazar."
                    link="github.com/hamzaplojovic/mojovipazar-rs"
                    aos="fade-up"
                    duration="1500"
                />
            </div>
            <div className="cards">
                <Card
                    name="Travello"
                    desc="Template for travel company."
                    link="github.com/hamzaplojovic/Travel-Website"
                    aos="fade-up"
                    duration="1700"
                />
            </div>
        </div>
    );
};

function Projects() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <div className="projects" id="projects">
                <h1 className="about-heading">Projects</h1>
                <div className="cards">
                    <Card
                        name="hamzaplojovic"
                        desc="This is about readme for github."
                        link="github.com/hamzaplojovic/hamzaplojovic"
                        aos="fade-down"
                        duration="700"
                    />
                    <Card
                        name="Lua"
                        desc="This is Lua course that i am going to."
                        link="github.com/hamzaplojovic/Lua"
                        aos="fade-down"
                        duration="900"
                    />
                    <Card
                        name="Todo"
                        desc="Todo app to make yourself more organized."
                        link="github.com/hamzaplojovic/React-Todo"
                        aos="fade-down"
                        duration="1100"
                    />
                </div>
                <div className="cards">
                    <Card
                        name="Auto Clicker"
                        desc="This is python bot that clicks 100 cps"
                        link="github.com/hamzaplojovic/auto-clicker"
                        aos="fade-up"
                        duration="1300"
                    />
                    <Card
                        name="mojnovipazar"
                        desc="Website for the old memorials of Novi Pazar."
                        link="github.com/hamzaplojovic/mojovipazar-rs"
                        aos="fade-up"
                        duration="1500"
                    />
                    <Card
                        name="Travello"
                        desc="Template for travel company."
                        link="github.com/hamzaplojovic/Travel-Website"
                        aos="fade-up"
                        duration="1700"
                    />
                </div>
            </div>
            <ProjectsTablet />
            <ProjectsPhone />
        </div>
    );
}

export default Projects;
//arab
