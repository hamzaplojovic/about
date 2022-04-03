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
            <img src={props.image} className="icon" />
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
            <div className="cards cards-first">
                <Card
                    name="hamzaplojovic"
                    image="https://o.remove.bg/downloads/bc76262e-fb10-4fec-bb90-f3afd036096a/website-removebg-preview.png"
                    desc="This is about readme for github."
                    link="github.com/hamzaplojovic/hamzaplojovic"
                    aos="fade-down"
                    duration="700"
                />
                <Card
                    name="Lua"
                    image="https://o.remove.bg/downloads/15cae946-5470-4064-b33d-1921373fa496/svg-removebg-preview.png"
                    desc="This is Lua course that i am going to."
                    link="github.com/hamzaplojovic/Lua"
                    aos="fade-down"
                    duration="900"
                />
            </div>
            <div className="cards">
                <Card
                    name="Todo"
                    image="https://o.remove.bg/downloads/f7ed6988-99d2-431a-8620-6cdb6f31a7c2/1560-removebg-preview.png"
                    desc="Todo app to make yourself more organized."
                    link="github.com/hamzaplojovic/React-Todo"
                    aos="fade-down"
                    duration="1100"
                />
                <Card
                    name="Auto Clicker"
                    image="https://o.remove.bg/downloads/190b277d-85d1-40c7-aa3f-c5b6d942c4d9/1676719-200-removebg-preview.png"
                    desc="This is python bot that clicks 100 cps"
                    link="github.com/hamzaplojovic/auto-clicker"
                    aos="fade-up"
                    duration="1300"
                />
            </div>
            <div className="cards">
                <Card
                    name="mojnovipazar"
                    image="https://o.remove.bg/downloads/16bde039-05a5-486b-b323-8ca92ca4e17a/APFygbLmxlXdAAAAAElFTkSuQmCC-removebg-preview.png"
                    desc="Website for the old memorials of Novi Pazar."
                    link="github.com/hamzaplojovic/mojovipazar-rs"
                    aos="fade-up"
                    duration="1500"
                />
                <Card
                    name="Travello"
                    image="https://o.remove.bg/downloads/c2ede8e1-293c-491d-b87b-46790c78f52a/svg-removebg-preview.png"
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
                    image="https://o.remove.bg/downloads/bc76262e-fb10-4fec-bb90-f3afd036096a/website-removebg-preview.png"
                    desc="This is about readme for github."
                    link="github.com/hamzaplojovic/hamzaplojovic"
                    aos="fade-down"
                    duration="700"
                />
            </div>
            <div className="cards">
                <Card
                    name="Lua"
                    image="https://o.remove.bg/downloads/15cae946-5470-4064-b33d-1921373fa496/svg-removebg-preview.png"
                    desc="This is Lua course that i am going to."
                    link="github.com/hamzaplojovic/Lua"
                    aos="fade-down"
                    duration="900"
                />
            </div>
            <div className="cards">
                <Card
                    name="Todo"
                    image="https://o.remove.bg/downloads/f7ed6988-99d2-431a-8620-6cdb6f31a7c2/1560-removebg-preview.png"
                    desc="Todo app to make yourself more organized."
                    link="github.com/hamzaplojovic/React-Todo"
                    aos="fade-down"
                    duration="1100"
                />
            </div>
            <div className="cards">
                <Card
                    name="Auto Clicker"
                    image="https://o.remove.bg/downloads/190b277d-85d1-40c7-aa3f-c5b6d942c4d9/1676719-200-removebg-preview.png"
                    desc="This is python bot that clicks 100 cps"
                    link="github.com/hamzaplojovic/auto-clicker"
                    aos="fade-up"
                    duration="1300"
                />
            </div>
            <div className="cards">
                <Card
                    name="mojnovipazar"
                    image="https://o.remove.bg/downloads/16bde039-05a5-486b-b323-8ca92ca4e17a/APFygbLmxlXdAAAAAElFTkSuQmCC-removebg-preview.png"
                    desc="Website for the old memorials of Novi Pazar."
                    link="github.com/hamzaplojovic/mojovipazar-rs"
                    aos="fade-up"
                    duration="1500"
                />
            </div>
            <div className="cards">
                <Card
                    name="Travello"
                    image="https://o.remove.bg/downloads/c2ede8e1-293c-491d-b87b-46790c78f52a/svg-removebg-preview.png"
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
                        image="https://o.remove.bg/downloads/bc76262e-fb10-4fec-bb90-f3afd036096a/website-removebg-preview.png"
                        name="hamzaplojovic"
                        desc="This is about readme for github."
                        link="github.com/hamzaplojovic/hamzaplojovic"
                        aos="fade-down"
                        duration="700"
                    />
                    <Card
                        name="Lua"
                        image="https://o.remove.bg/downloads/15cae946-5470-4064-b33d-1921373fa496/svg-removebg-preview.png"
                        desc="This is Lua course that i am going to."
                        link="github.com/hamzaplojovic/Lua"
                        aos="fade-down"
                        duration="900"
                    />
                    <Card
                        name="Todo"
                        image="https://o.remove.bg/downloads/f7ed6988-99d2-431a-8620-6cdb6f31a7c2/1560-removebg-preview.png"
                        desc="Todo app to make yourself more organized."
                        link="github.com/hamzaplojovic/React-Todo"
                        aos="fade-down"
                        duration="1100"
                    />
                </div>
                <div className="cards">
                    <Card
                        name="Auto Clicker"
                        image="https://o.remove.bg/downloads/190b277d-85d1-40c7-aa3f-c5b6d942c4d9/1676719-200-removebg-preview.png"
                        desc="This is python bot that clicks 100 cps"
                        link="github.com/hamzaplojovic/auto-clicker"
                        aos="fade-up"
                        duration="1300"
                    />
                    <Card
                        name="mojnovipazar"
                        image="https://o.remove.bg/downloads/16bde039-05a5-486b-b323-8ca92ca4e17a/APFygbLmxlXdAAAAAElFTkSuQmCC-removebg-preview.png"
                        desc="Website for the old memorials of Novi Pazar."
                        link="github.com/hamzaplojovic/mojovipazar-rs"
                        aos="fade-up"
                        duration="1500"
                    />
                    <Card
                        image="https://o.remove.bg/downloads/c2ede8e1-293c-491d-b87b-46790c78f52a/svg-removebg-preview.png"
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
