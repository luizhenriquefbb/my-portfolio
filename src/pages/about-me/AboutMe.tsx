import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { withNavigationContext, FullPageSliderProps } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Content from "../../components/content/content";
import Section from "../../components/section/section";

import * as me from "../../assets/me.jpeg";

export const AboutMe = withNavigationContext(({ fullpage }: FullPageSliderProps) => {
    fullpage.navigation.animation = 'cubeAnimation'
    // fullpage.navigation.buttons = true


    return (
        <Section wrapper={false} backgroundColor="#292c35">
            <Content
                main={
                    <Lettering
                        title="About Me"
                        text={[
                            "My name is Luiz Henrique and I'm a software developer excited about "+
                            "solving problems and building solutions that people can benefit from!",
                            "This is my portfolio and contains some of personal my personal projects."
                        ]}
                        image={me}
                    />
                }
                />
        </Section>
    );
});

export default AboutMe;
