declare module "react-awesome-slider/dist/navigation" {

    export const possibleAnimations = [
        {
            label: "Cube Animation",
            value: "cubeAnimation"
        },
        {
            label: "Fall Animation",
            value: "fallAnimation"
        },
        {
            label: "Fold Out Animation",
            value: "foldOutAnimation"
        },
        {
            label: "Open Animation",
            value: "openAnimation"
        },
        {
            label: "Scale Out Animation",
            value: "scaleOutAnimation"
        }
    ];

    import AwesomeSlider, { AwesomeSliderProps } from "react-awesome-slider";

    export const withNavigationHandlers = (a: typeof AwesomeSlider) => AwesomeSlider;

    type IFullPage = {
        navigation: {
            animation: string,
            goto: string,
            navigating: boolean,
            pop: boolean,
            slug: string,
            // buttons?: boolean,
        },
        navigate: (to:string) => void
    }

    interface FullPageSliderProps {
        fullpage: IFullPage,

    }

    export type withNavigationContextParams = (a: IFullPage) => JSX.Element | null
    export const withNavigationContext = (a: any) => JSX.Element;
}