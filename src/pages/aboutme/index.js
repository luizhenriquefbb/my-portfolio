import React from 'react';
import "./aboutme.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function () {

    return (
        <>
            <div className="aboutme-container container">
                <div className="about-me">
                    <h1 >About Me</h1>
                </div>

                <div className="about-me-description">
                    <p>
                        Here is a little bit about me:
                    </p>

                    <ul className="my-skills">
                        <li>
                            <span>
                                I have experience with javascript, react, css, and whatever you need! I like to be always learning and I’m eager to more knowlege
                            </span>

                        </li>
                        <li>
                            <span>
                                I’m passionate for technologies and love to use it to make life better and easier. Two of my projects that I’m most proud of were for not profitable means
                            </span>
                        </li>
                    </ul>
                </div>


                <div className="get-in-touch">
                    <span>Get in touch: </span>
                    <a className="link" href="https://www.linkedin.com/in/luizhenriquefbb/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        in/luizhenriquefbb
                    </a>
                    <a className="link" href="https://github.com/luizhenriquefbb" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        /luizhenriquefbb
                    </a>
                    <a className="link" href="mailto:luizhenriquefbb@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FiMail />
                        luizhenriquefb@gmail.com
                    </a>
                </div>

            </div>
        </>
    )
}