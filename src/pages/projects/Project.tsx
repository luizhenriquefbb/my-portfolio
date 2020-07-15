import React from "react";
import { withNavigationContext, FullPageSliderProps } from "react-awesome-slider/dist/navigation";
import Content from "../../components/content/content";
import Section from "../../components/section/section";
import Page from "../../components/page/page";
import Mouse from "../../components/mouse/mouse"
import Portfolio from "../../components/project";

import * as beTheHero from "../../assets/be_the_hero/web0.png"
import * as rcnc from "../../assets/rcnc/home_login.png"
import * as tindev from "../../assets/tindev/login_1.png"
import * as vlibras from "../../assets/vlibras/705263c3-30b2-4c5d-a43b-bc45d6316c15.png"

const myProjects = [
    {
        image: beTheHero,
        text: [
            <p>
                "Be the Hero" is one of the projects that i'm most proud of. Not because of the complexity, but
                because of the good this can make.
            </p>,

            <p>
                The objective of this site is to link people who wants to help others but don't know how or who.
            </p>,
            <p>
                With this site, any non profit organization can subscribe and give some info to anyone get in touch.
            </p>,

            <p>
                It was developed with react and react-native for the frontend and the backend was made in node with
                SQL as database
            </p>
        ],
        title: "Be the Hero",
        href: "http://35.223.223.97:3001/",
    },
    {
        image: rcnc,
        text: [
            <p>
                "RCNC - Code and Coffee" is a project that I\'ve made for developers who
                need a spot to word find companies who has available areas or even rooms to rent.
            </p>,

            <p>
                It was developed with react and react-native for the frontend and the backend was
                made in node with mongoDB as database
            </p>
        ],

        title: "RCNC - Code and Coffee",
        href: "http://35.223.223.97:3003",
    },
    {
        image: tindev,
        text: [
            <p>
                Well. This is obviously inspired on tinder, but here we want to build an awesome
                network with other developers who knows a specific programing language you may
                interesting for.
            </p>,
            <p>
                So, just insert you github user name and find other developers to be partner and
                build amazing things together.
                </p>,
            <p> It was developed with react and react-native for the frontend and the backend was
                made in node with mongoDB as database </p>
        ],

        title: "Tindev",
        href: "http://35.223.223.97:3002",
    },
    {
        image: vlibras,
        text: [
            <p>
                VLibras and Assista were both my first and second experience in the job market in a
                partnership with my university and I'm very proud of been part of these projects.
                </p>,
            <p>
                These are projects of social inclusion that aims to helps deaf people to understand the
                content in some web page, for instance, by translating the text into "brazilian language of
                signals" (Libras)
                </p>,
            <p>
                For these projects I had to work more in the backend with python.
                </p>
        ],

        title: "V-libras",
        href: "https://www.vlibras.gov.br/",
    },
]

const backgroundColours = ["#4158b4", "#617be3", "rgb(133, 151, 225)"]
export default withNavigationContext(({ fullpage }: FullPageSliderProps) => {
    return (
        <Page>
            {myProjects.map((myProject, index) => {
                const backgroundIndex = index % backgroundColours.length;
                return (
                    <Section
                        wrapper={false}
                        backgroundColor={backgroundColours[backgroundIndex]}
                        key={index}  >
                        <Content
                            main={
                                <Portfolio
                                    title={myProject.title}
                                    text={myProject.text}
                                    link={myProject.href}
                                    image={myProject.image}
                                />
                            }
                            action={<Mouse />}
                        />
                    </Section>
                )
            })}

        </Page>

    )

});
