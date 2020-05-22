import React from 'react';
import Project from '../../components/project/index';
import ContainerSeparator from '../../components/containerSeparator';


import rcnc_image_1 from "../../assets/rcnc/dashboard.png";

import be_the_hero_img_5 from "../../assets/be_the_hero/web0.png"

import tindev_image_1 from "../../assets/tindev/login_1.png"

import vlibras_image_1 from "../../assets/vlibras/705263c3-30b2-4c5d-a43b-bc45d6316c15.png"

export default function () {
    const myProjects = [
        {
            title: "RCNC - Code and Coffee",
            description: <>
                <p> "RCNC - Code and Coffee" is a project that I've made for developers who need a spot to word find
                     companies who has available areas or even rooms to rent. </p>
                <p> It was developed with react and react-native for the frontend and the backend was made in node with
                    mongoDB as database </p>
            </>,
            images: [rcnc_image_1],
            link: "",
        },
        {
            title: "Be the Hero",
            description: <>
                <p>
                    "Be the Hero" is one of the projects that i'm most proud of. Not because of the complexity, but
                    because of the good this can make.
                </p>

                <p>
                    The objective of this site is to link people who wants to help others but don't know how or who.
                </p>
                <p>
                    With this site, any non profit organization can subscribe and give some info to anyone get in touch.
                </p>

                <p> It was developed with react and react-native for the frontend and the backend was made in node with
                    SQL as database </p>
            </>,
            images: [be_the_hero_img_5],
            link: "",
        },
        {
            title: "tindev",
            description: <>
                <p>
                    Well. This is obviously inspired on tinder, but here we want to build an awesome network with
                    other developers who knows a specific programing language you may interesting for.
                </p>
                <p>
                    So, just insert you github user name and find other developers to be partner and build amazing things
                    together.
                </p>
                <p> It was developed with react and react-native for the frontend and the backend was made in node with
                    mongoDB as database </p>
            </>,
            images: [tindev_image_1],
            link: "",
        },
        /* {
            title: "Germanicos",
            description: <>
                <p>
                    Germanicos has been my first international experience. I'm very happy with my colleagues and I've
                    learned A LOT!
                </p>
            </>,
            images: [""],
            link: "",
        }, */
        {
            title: "Vlibras / Assista",
            description: <>
                <p>
                    VLibras and Assista were both my first and second experience in the job market in a
                    partnership with my university and I'm very proud of been part of these projects.
                </p>
                <p>
                    These are projects of social inclusion that aims to helps deaf people to understand the
                    content in some web page, for instance, by translating the text into "brazilian language of
                    signals" (Libras)
                </p>
                <p>
                    For these projects I had to work more in the backend with python.
                </p>
            </>,
            images: [vlibras_image_1,],
            link: "https://www.vlibras.gov.br/",
        },
    ]

    return (
        <>
            {myProjects.map((project, index) => {
                return (
                    <>
                        <Project
                            title={project.title}
                            description={project.description}
                            images={project.images}
                            link={project.link}
                            imgPosition={index % 2 === 0 ? "left" : "right"}
                        />

                        <ContainerSeparator />
                    </>
                )
            })}
        </>
    )
}