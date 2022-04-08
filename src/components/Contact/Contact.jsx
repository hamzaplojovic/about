import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="contact" id="contact">
            <h1 className="contact-heading" data-aos="fade-right">
                Contact
            </h1>
            <hr className="hr" />
            <div className="contact-main">
                <div className="send">
                    <form
                        action="mailto:hamzaplojovic4@gmail.com"
                        method="post"
                        enctype="text/plain"
                    >
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
                        <button className="button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
