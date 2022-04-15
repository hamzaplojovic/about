import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const submitHandler = (e) => {
        e.preventDefault();
        var name = document.getElementById("name").value;
        var message = document.getElementById("message").value;
        var subject = document.getElementById("subject").value;
        window.location.assign(
            "mailto:hamzaplojovic4@gmail.com?subject=" +
                subject +
                "&body=Hi%2C%20I'm%20" +
                name +
                "%0D%0A%0D%0A" +
                message.replaceAll(" ", "%20") +
                "%0D%0A"
        );
    };
    return (
        <div className="contact" id="contact">
            <h1 className="contact-heading" data-aos="fade-right">
                Contact
            </h1>
            <hr className="hr2" />
            <div className="contact-main">
                <div className="send">
                    <form>
                        <label data-aos="fade-right" data-aos-duration="400">
                            Name
                        </label>
                        <input type="text" id="name" />
                        <label data-aos-duration="700" data-aos="fade-right">
                            Email
                        </label>
                        <input type="email" id="subject" />
                        <label data-aos="fade-right" data-aos-duration="1000">
                            Message
                        </label>
                        <textarea id="message"></textarea>
                        <button className="button" onClick={submitHandler}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
