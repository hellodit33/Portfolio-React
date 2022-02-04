import React from 'react';


import Socials from "../components/Socials.js";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "../layout/Home.css";

const Home = () => {
    Aos.init();

    return (
        <>
            <div data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-delay="1000" data-aos-duration="800"
                className="click"><p >Get to know me :)</p>
            </div>

            <section className="homepage">
                <div className="overlay">


                    <h1 className="text-2xl">Elodie Pradet</h1>
                    <p>Front-end student living in Stockholm</p>
                    <Socials />

                </div >
            </section >
        </>
    )
}



export default Home;
