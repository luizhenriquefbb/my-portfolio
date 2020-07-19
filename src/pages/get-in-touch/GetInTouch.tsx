import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { withNavigationContext, FullPageSliderProps } from "react-awesome-slider/dist/navigation";
import Lettering from "../../components/lettering/lettering";
import Content from "../../components/content/content";
import Section from "../../components/section/section";
import SocialMedia from "../../components/socialMedia";


export const GetInTouch = withNavigationContext(({ fullpage }: FullPageSliderProps) => {

    fullpage.navigation.animation = 'fallAnimation'
    // fullpage.navigation.buttons = false

    return (
        <Section wrapper={false} backgroundColor="#292c35">
            <Content
                main={
                    <Lettering
                        title="Get In Touch"
                        text={[
                            "Feel free to contact me on any social media"
                        ]}
                    />
                }
                action={
                    <div className="row col-md-12">
                        <SocialMedia />
                    </div>
                } />
        </Section>
    );
});

export default GetInTouch;
