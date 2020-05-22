import React from 'react';
import "./home.css";

import Portfolio from "../portfolio";
import AboutMe from "../aboutme";
import ContainerSeparator from '../../components/containerSeparator';
export default function () {

    return (
        <>
            <div className="home-container container">
                <div className="hello title">
                    <h1>Hello</h1>
                    <h1>:)</h1>
                </div>

                <p className="description-me">
                    My name is <span className="theme1">Luiz Henrique</span> and I'm a software developer excited about solving
                    problems and building solutions that people can benefit from! This is my portfolio
                    and contains some of personal my personal projects.
                </p>
            </div>

            <ContainerSeparator />
            <AboutMe />
            <ContainerSeparator />
            <Portfolio />
            <ContainerSeparator />
        </>
    )
}