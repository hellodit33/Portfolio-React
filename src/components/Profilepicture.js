import React from 'react';
import profilepic from "../img/elodie-pradet.jpg";


import Aos from 'aos';
import 'aos/dist/aos.css';


const Profilepicture = () => {
    Aos.init();
    return (
        <>
            <img src={profilepic} className="profilepic" alt="Elodie Pradet" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"></img>
        </>
    )

}

export default Profilepicture;
