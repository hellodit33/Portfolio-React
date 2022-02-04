import React from 'react';
import logo from "../img/cartoon.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Logo = () => {
    Aos.init();
    return (
        <>
            <img src={logo} className="logo" alt="Elodie Pradet" data-aos="fade-right" data-aos-delay="0" data-aos-duration="500"></img>
        </>
    )
}

export default Logo;