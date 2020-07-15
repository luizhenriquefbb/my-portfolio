import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { withNavigationContext, IFullPage } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Content from "../../components/content/content";
import Section from "../../components/section/section";

export const AboutMe = withNavigationContext(({ fullpage }:IFullPage) => {
    return (
        <Section wrapper={false} backgroundColor="#292c35">
            <Content
                main={<Lettering
                    title="About Me"
                    text={[
                        "My name is Luiz Henrique and I'm a software developer excited about "+
                        "solving problems and building solutions that people can benefit from!",
                        "This is my portfolio and contains some of personal my personal projects."
                    ]} />}
                action={<div className="button">
                    <AwesomeButton
                        size="large"
                        onPress={() => {
                            fullpage.navigation.animation ="fallAnimation";
                            fullpage.navigate("/projects");
                        }}
                    >
                        Let's take a look at my portfolio !!
            </AwesomeButton>
                </div>} />
        </Section>
    );
});
