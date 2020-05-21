import React from 'react';
import Project from '../../components/project/index';
import ContainerSeparator from '../../components/containerSeparator';

export default function () {
    const myProjects = [
        {
            title: "RCNC - Code and Coffee",
            description: <>
                <p> "RCNC - Code and Coffee" is a project that I've made for developers who need a spot to word find companies
                    who has available areas or even rooms to rent. </p>
                <p> I was developed with react / react-native for the frontend and the backend was made in node with mongoDB as
                    database </p>
            </>,
            images: [""],
        },
        {
            title: "Be the Hero",
            description: "",
            images: [""],
        },
        {
            title: "tindev",
            description: "",
            images: [""],
        },
        {
            title: "Germanicos",
            description: "",
            images: [""],
        },
        {
            title: "Vlibras / Assista",
            description: "",
            images: [""],
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
                            imgPosition={index % 2 === 0 ? "left" : "right"}
                        />

                        <ContainerSeparator />
                    </>
                )
            })}
        </>
    )
}