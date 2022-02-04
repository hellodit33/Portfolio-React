import { useState, useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaClone } from "react-icons/fa"
import "../layout/Github.css";


function GitHubAPI() {
    const [cards, setCards] = useState([]);


    const getApi = () => {
        Aos.init({ duration: 1000 });

        fetch("https://api.github.com/users/hellodit33/repos")
            .then((response) => response.json())
            .then((json) => {
                setCards(json);
            });
    };
    useEffect(() => {
        getApi();

    }, []);



    return (
        <div className="projects">
            <h1 className="titles">My Github Repositories</h1>


            <div className="cards">


                {cards.map(({ clone_url, name, html_url, id }) => (
                    <ul>
                        <li key={id}>


                            <h4 data-aos="fade-up" data-aos-duration="3000" className="github-title"></h4>
                            <h3 className="github-name">{name}</h3>
                            <a className="git-btn" href={html_url} data-aos="fade-down" data-aos-once="true" data-aos-duration="5000"> <FaGithub style={{ marginRight: 5 }} />GitHub</a>
                            <a className="clone-btn" href={clone_url} data-aos="fade-right" data-aos-once="true" data-aos-duration="8000">
                                <FaClone style={{ marginRight: 5 }} />Clone Repository</a>

                        </li>
                    </ul>

                ))}

            </div>
        </div >
    );
}

export default GitHubAPI;