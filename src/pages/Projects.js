import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaClone } from "react-icons/fa";
import "../layout/Projects.css";
import hint2 from "../img/hint2.png";
import dagsforfranska from "../img/dagsforfranska.png";

const projects = [
  {
    name: "Hint Onboarding",
    id: 1,
    description:
      "This is a fullstack MERN web application (MongoDB, Express, React, Node.js). I developed it for a course called Javascript 3. The aim of that page is to find a movie to stream, and to be able to go through an onboarding process for a recommendation streaming app. It is also possible to create a post, read posts, update posts and delete posts, as well as comment (full CRUD). Feel free to create your profile and test this page!",
    picture: "https://i.postimg.cc/q7xjTLT1/hint2.png",
    link: "https://hint-onboarding-app.herokuapp.com",
    github: "https://github.com/hellodit33/fullstack-mern",
  },
  {
    name: "Tripshare",
    id: 2,
    description:
      "This is a website I coded with another student for a course in back-end. The idea behind it is a startup idea I got since I lived in Iceland one summer. This website lets users posts and find shared car trips to beautiful places in Iceland. This website has full CRUD functionality: the user can create trips, read about the trips, update the trips and delete the trips. The API is built on Strapi and the CMS used for writers is Wordpress.",
    picture:
      "https://i.postimg.cc/rpr3Md9D/Ska-rmavbild-2022-07-06-kl-19-21-05.png",
    github: "https://github.com/hellodit33/Tripshare-Wordpress-Strapi-API",
  },
  {
    name: "Gifted",
    id: 3,
    description:
      "This is a React E-commerce website created for a group assignment in my first React course. The fictional goal is to sell gift cards. The website was built with React and SASS. The user can find gift cards, and search through a search bar. The user can also select gift cards to buy and update their shopping cart.",
    picture: "https://i.postimg.cc/SxhJWPZR/gifted.png",
    github: "https://github.com/Nabizadehse/Gifted.com",
  },

  {
    name: "Dags för franska",
    id: 4,
    description:
      "This is a website I created for my podcast and I developed it during a HTML & CSS course. It was at the beginning of my first front-end year, and I used HTML, CSS and JavaScript for this indivudla assignment. It's a fully hosted website, and is used by the podcast's audience to among others read the manuscripts for beginners and the vocabulary lists.",
    picture: "https://i.postimg.cc/YCgdX7yK/dagsforfranska.png",
    link: "https://dagsforfranska.com",
    github: "https://github.com/hellodit33/Dags-for-franska",
  },

  {
    name: "Lilla Ateljén",
    id: 5,
    description:
      "This is a group work done for a course in HTML & SASS. The website is a first webshop draft for a friend who makes ceramic pottery. The user can find ceramics to buy with detailed pages for each article and a zoom function on the pictures, info to contact the seller and social media links. When hovering over each ceramic article's picture, the user can also see the other side of it.",
    picture:
      "https://i.postimg.cc/Df6L6LJn/Ska-rmavbild-2022-07-06-kl-19-54-41.png",
    link: "https://lilla-ateljen.netlify.app/",
    github: "https://github.com/hellodit33/Lilla-Ateljen",
    figma:
      "https://www.figma.com/file/VKI7o0XaxM7bg2iWVN2lED/Lilla-Atelj%C3%A9n?node-id=0%3A1",
  },
  {
    name: "Elsi",
    id: 6,
    description:
      "This is a UX individual assignment. The goal was to do user research and create a food delivery app prototype. The fictional client was a dark kitchen so every meal would come from one restaurant. I chose to focus on a healthy food app because user research proved needs in this area.",
    picture:
      "https://i.postimg.cc/65YmR8Lm/Ska-rmavbild-2022-07-06-kl-20-29-02.png",
    figma:
      " https://www.figma.com/proto/t16uDNox64VgMqKvGYPU0n/Prototype?node-id=2%3A8&starting-point-node-id=2%3A8",
  },
];
function Projects() {
  return (
    <div className="projects">
      <h1 className="titles">My Projects</h1>

      <div className="cards">
        {projects.map(
          ({ name, description, picture, github, link, figma, id }) => (
            <ul>
              <li key={id}>
                <a href={github}>
                  <img src={picture} alt="" />
                </a>
                <h4
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="projects-title"
                ></h4>
                <h3 className="projects-name">{name}</h3>
                <p className="projects-description">{description}</p>
                {github ? (
                  <a href={github} className="projects-github">
                    Github
                  </a>
                ) : null}

                {link ? (
                  <a href={link} className="projects-link">
                    Deployed Site
                  </a>
                ) : null}
                {figma ? (
                  <a href={figma} className="projects-figma">
                    Figma Prototype
                  </a>
                ) : null}
              </li>
            </ul>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
