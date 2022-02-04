import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

import "../layout/About.css";

import Socials from "../components/Socials.js";

import Profilepicture from '../components/Profilepicture';
import Logo from '../components/Logo';
import cvimage from '../img/cv-image.png';
import news from "../img/news.png";

import cv from "../img/cv.pdf";
import studies from "../img/books.png";
import italy from "../img/italy.png";
import podcast from "../img/podcast.png";
import sweden from "../img/sweden.png";
import france from "../img/france.png";
import paris from "../img/paris.png";
import iceland from "../img/iceland.png";
import germany from "../img/germany.png";
import pisa from "../img/pisa.png";

import watching from "../img/watching.png";
import dancing from "../img/dancing.png";
import cooking from "../img/cooking.png";
import drinking from "../img/drinking.png";
import reading from "../img/reading.png";
import zoom from "../img/zoom.png";
import watch from "../img/watch.png";
import love from "../img/love.png";
import read from "../img/read.png";
import plant from "../img/plant.png";
import skiing from "../img/skiing.png";
import hiking from "../img/hiking.png";
import gardening from "../img/gardening.png";
import hint from "../img/hint.png";
import planet from "../img/planet.png";

import computer from "../img/computer.png";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';

function Text() {
    Aos.init();



    return (
        <div className="container">
            <section className="about">
                <div><Logo /></div>

                <h1 className="titles" data-aos="fade-right" data-aos-delay="400">Hello! I'm Élodie</h1>


                <div><Profilepicture /></div>
                <div className="typewriter">
                    <Typewriter

                        words={["I'm 27 and I live in Stockholm"]}
                        loop={false}
                        typeSpeed={100}

                    />
                </div>

                <div className="front-end " data-aos="fade-left" data-aos-delay="1400">and I study Front-end Development</div>
                <div className="scroll " data-aos="zoom-in" data-aos-delay="1800">Scroll to get to know more about me</div>

            </section>
            <section className="studies">


                <div className="col-1">
                    <img src={studies} alt="studies" className="books" data-aos="zoom-in" data-aos-delay="400" />
                    <img src={computer} data-aos="fade-right" data-aos-delay="500" />
                    <img src={italy} data-aos="fade-right" data-aos-delay="600" />


                </div>

                <div className="col-2">
                    <div className="studies-cards uni" data-aos="fade-right" data-aos-delay="400"><p>I got 4 Bachelor's Degrees in
                        Political Science, Sociology, Journalism and Multimedia, and Film Studies</p></div>
                    <div className="studies-cards" data-aos="fade-right" data-aos-delay="500"><p>and I am currently studying Front-End Development at KYH Stockholm
                        2021-2023, learning all about HTML, CSS, Javascript, React, UX, graphic design, and Agile methods,</p></div>
                    <div className="studies-cards" data-aos="fade-right" data-aos-delay="600"><p>while also studying Italian at Stockholm University to get fluent <i>abbastanza presto.</i></p></div>

                </div>


            </section >


            <section className="work">
                <div className="row1">
                    <div className="cinema" data-aos="fade-down" data-aos-delay="400"><img src={hint} alt="hint" /><p>I am currently working as a Marketing and Editorial Manager at the startup Hint to create an application that will make every streaming platform user forget about the hustle of scrolling before watching a movie or a TV-show.</p></div>

                </div>

                <div className="row2">
                    <div className="news" data-aos="fade-left" data-aos-delay="630"> <img src={news} alt="news" /> <p>I have worked as a journalist for both Swedish national newspapers and public radio (Svenska Dagbladet, Göteborgs-Posten, Eskilstuna-Kuriren, P4 Västmanland etc), as well as for French speaking media (TF1, France 2, Arte, Brut, La Croix etc).</p></div>
                    <div className="podcast" data-aos="fade-right" data-aos-delay="840"> <img src={podcast} alt="podcast" /><p>I have a podcast called Dags för franska (Time for French), together with my friend Christian Bardeau. We help Swedish people learn French.</p></div>



                </div>
            </section>

            <section className="country-languages">
                <div>
                    <div>
                        <img data-aos="fade-down" data-aos-delay="100" src={france} alt="france" className="france" />

                        <div className="txt-france" data-aos="fade-right" data-aos-delay="600">
                            I'm from Bordeaux in France
                        </div>
                    </div>


                    <div >

                        <img src={sweden} alt="sweden" className="sweden" data-aos="fade-down" data-aos-delay="300" />

                        <div className="txt-sweden" data-aos="fade-right" data-aos-delay="900">
                            and I've been living in Sweden since 2012.
                        </div>



                    </div>


                </div>

                <div className="languages">
                    <div className="typewriter-languages" data-aos="fade-right" data-aos-delay="1000"><Typewriter

                        words={["I love to learn new languages!"]}
                        loop={false}
                        typeSpeed={100}


                    /></div>
                    <div className="stamps" >
                        <img src={paris} alt="paris" data-aos="zoom-in" data-aos-delay="1200" className="paris"></img>
                        <img src={germany} alt="germany" data-aos="zoom-in" data-aos-delay="1400" className="germany"></img>
                        <img src={pisa} alt="pisa" data-aos="zoom-in" data-aos-delay="1600" className="pisa"></img>
                        <img src={iceland} alt="iceland" data-aos="zoom-in" data-aos-delay="1800" className="iceland"></img>
                    </div>


                </div>

                <div className="country-txt" data-aos="fade-right" data-aos-delay="2200">

                    <p>My mothertongue is <div className="bold">French.</div>

                        I speak fluent <div className="bold">English and Swedish.</div>

                        I have a good level in <div className="bold">German and Italian.</div>

                        I am a beginner in <div className="bold">Arabic and Icelandic.</div>

                        And I understand<div className="bold">Norwegian and Danish.</div>

                    </p>

                </div>


            </section >

            <section className="hobbies">
                <div className="hobby-pictures">
                    <img src={watching} alt="watching" data-aos="fade-right" data-aos-delay="100" className="watching"></img>
                    <img src={gardening} alt="gardening" data-aos="fade-right" data-aos-delay="200" className="gardening"></img>
                    <img src={reading} alt="reading" data-aos="fade-right" data-aos-delay="300" className="reading"></img>
                    <img src={planet} alt="planet" data-aos="fade-right" data-aos-delay="400" className="planet"></img>
                    <img src={read} alt="read" data-aos="fade-right" data-aos-delay="500" className="read"></img>
                    <img src={drinking} alt="drinking" data-aos="fade-right" data-aos-delay="600" className="drinking"></img>
                    <img src={zoom} alt="zoom" data-aos="fade-right" data-aos-delay="700" className="zoom"></img>
                    <img src={plant} alt="plant" data-aos="fade-right" data-aos-delay="800" className="plant"></img>

                    <img src={dancing} alt="dancing" data-aos="fade-right" data-aos-delay="900" className="dancing"></img>

                    <img src={watch} alt="watch" data-aos="fade-right" data-aos-delay="1000" className="watch"></img>
                    <img src={love} alt="love" data-aos="fade-right" data-aos-delay="1100" className="love"></img>

                    <img src={skiing} alt="skiing" data-aos="fade-right" data-aos-delay="1200" className="skiing"></img>
                    <img src={hiking} alt="hiking" data-aos="fade-right" data-aos-delay="1300" className="hiking"></img>
                    <img src={cooking} alt="cooking" data-aos="fade-right" data-aos-delay="1400" className="cooking"></img>










                </div>

                <div className="hobby-txt" data-aos="fade-up" data-aos-delay="1500" >
                    <p>And here's to everything I love doing on my leisure time!</p>
                </div>
            </section>







            <section className="download-cv">

                <a href={cv} download><p>Download my CV</p></a>

                <img src={cvimage} alt="cv image" />
                < NavLink exact to="/Contact" >Contact me</NavLink>

                <div className="socials"><Socials /></div>

            </section>

        </div >

    )


}

export default Text;