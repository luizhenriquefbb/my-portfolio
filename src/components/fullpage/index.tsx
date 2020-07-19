import React, { useRef } from "react";
import AwesomeSlider, { AwesomeSliderProps } from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import {
    withNavigationHandlers,
    withNavigationContext,
    FullPageSliderProps
} from "react-awesome-slider/dist/navigation";
import { media } from "../../routes";
import Startup from "../startup/startup";

const Slider = withNavigationHandlers(AwesomeSlider);


export default withNavigationContext((props: FullPageSliderProps) => {
    const { fullpage }= props

    const isFirstLoad = useRef(true);
    const animation = fullpage.navigation.animation || `foldOutAnimation`;

    return (
        <Slider
            animation={animation}
            startupScreen={<Startup />}
            startupDelay={275}
            mobileTouch={false}
            disabled={true}
            infinite={false}
            className="awesome-slider"
            onTransitionEnd={() => {
                // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
                if (isFirstLoad.current === true) {
                    document.querySelector("body")?.classList.add("animated");
                    document.querySelector("body")?.classList.add("visible");
                }
            }}
            media={media}
        />
    );
});
