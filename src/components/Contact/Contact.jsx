import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const mouse = () => {
        document.querySelector("button").style.background = "#333d29";
        document.querySelector("button").style.color = "#ffe8d6";
        document.querySelector("button").style.border = "2px solid #ffe8d6";
    };
    const out = () => {
        document.querySelector("button").style.background = "#ffe8d6";
        document.querySelector("button").style.color = "#333d29";
    };
    return (
        <div className="contact" id="contact">
            <h1 className="contact-heading" data-aos="fade-right">
                Contact
            </h1>
            <div className="contact-main">
                <div className="send">
                    <label data-aos="fade-right" data-aos-duration="400">
                        Name
                    </label>
                    <input
                        type="text"
                        data-aos="fade-right"
                        data-aos-duration="400"
                    />
                    <label data-aos-duration="700" data-aos="fade-right">
                        Email
                    </label>
                    <input
                        type="email"
                        data-aos="fade-right"
                        data-aos-duration="700"
                    />
                    <label data-aos="fade-right" data-aos-duration="1000">
                        Message
                    </label>
                    <textarea
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    ></textarea>
                    <button
                        onMouseOver={mouse}
                        onMouseOut={out}
                        data-aos="fade-right"
                    >
                        Submit
                    </button>
                </div>
                <div className="contact-info">
                    <iframe
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.2143822379253!2d20.51433381515518!3d43.14202729335232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475628133fa952b5%3A0xb2ff1a06301654a3!2z0JDQktCd0J7QiC3QsCwg0J3QvtCy0Lgg0J_QsNC30LDRgA!5e0!3m2!1ssr!2srs!4v1646069744761!5m2!1ssr!2srs"
                    ></iframe>
                    <h2 data-aos="fade-left" data-aos-duration="1300">
                        hamzaplojovic4@gmail.com
                    </h2>
                    <h4 data-aos="fade-left" data-aos-duration="1700">
                        +381 6009390707
                    </h4>
                    <h3 data-aos="fade-left" data-aos-duration="2000">
                        Github : @hamzaplojovic
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;
