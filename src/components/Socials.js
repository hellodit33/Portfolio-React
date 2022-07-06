import React from 'react';

import { FaTwitter, FaFilm, FaGithub, FaPodcast, FaLinkedin } from "react-icons/fa";

const Socials = () => {

    return (
        <>
            <ul>
                <li><a className="link" href="https://www.linkedin.com/in/élodie-pradet" rel="noopenner noreferrer"><FaLinkedin className="icon" /></a><div className="hover-on">LinkedIn</div></li>
                <li><a className="link" href="https://github.com/hellodit33" rel="noopenner noreferrer"><FaGithub className="icon" /></a><div className="hover-on">Github</div></li>
                <li><a className="link" href="https://joinhint.com" target="_blank" rel="noopenner noreferrer"><FaFilm className="icon" /></a><div className="hover-on">Hint</div></li>
                <li><a className="link" href="https://www.dagsforfranska.com" target="_blank" rel="noopenner noreferrer"><FaPodcast className="icon" /></a><div className="hover-on">Podcast</div></li>
                <li><a className="link" href="https://twitter.com/elodiepradet" target="_blank" rel="noopenner noreferrer" ><FaTwitter className="icon" /></a><div className="hover-on">Twitter</div></li>
            </ul>
        </>
    )

}

export default Socials;