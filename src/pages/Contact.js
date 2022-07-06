import React, { useRef } from 'react';
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Socials from "../components/Socials.js";
import contactcoffee from "../img/contactcoffee.png";
import desk from "../img/desk.png";
import emailjs from '@emailjs/browser';
import "../layout/Contact.css";
const scrollToContactForm = () => {
    window.scrollTo({
        top: 790,
        behavior: 'smooth'

    });
};



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_w7wxilz', 'template_jef21vo', form.current, "user_LzlEreSbVCEOJAb1Ow7ly")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        document.querySelector(".submit-message").innerText = "Thank you for your message! I'll contact you soon."
    };
    return (

        <div>

            <section className="contacts">
                <h1 className="titles">Contact Me</h1>


                <ul>
                    <li>

                        <a href="tel:0706691762" className="icons">+46 7 06 69 17 62
                            <FaPhone className="icons" />

                        </a>

                    </li>

                    <li>
                        <a href="mailto:pradetelodie@gmail.com" className="icons">pradetelodie@gmail.com   <FaEnvelope className="icons" /></a>

                    </li>



                </ul>
                <div className="image-rsp">
                    <div className="desk"><img src={desk} alt="desktop computer and plant" /></div>

                    <div className="contactcoffee"><img src={contactcoffee} alt="coffee cup" /></div>
                </div>

                <p className="prefer">Prefer     <button onClick={scrollToContactForm}>a contact form </button>        instead? </p>
            </section >

            <section className="contact-form">
                <form ref={form} onSubmit={sendEmail} >
                    <div >
                        <label htmlFor="text">Name:</label>
                    </div>
                    <input type="text" id="text" name="user_name" />

                    <div >
                        <label htmlFor="email">Email:</label>
                    </div>
                    <input type="email" id="email" name="user_email" />

                    <div >
                        <label htmlFor="message">Message:</label>
                    </div>
                    <textarea id="message" rows="4" cols="50" name="message"></textarea>

                    <button type="submit" value="Send">Send</button>

                    <div className="submit-message">

                    </div>

                    <div className="socials"><Socials /></div>


                </form>








            </section>


        </div >

    );
};


export default Contact;