declare module "react-awesome-slider/dist/navigation" {
    import AwesomeSlider from "react-awesome-slider";

    export const withNavigationHandlers = (a: typeof AwesomeSlider) => AwesomeSlider;

    type IFullPage = { fullpage: {
        navigation: {
            animation: string
        },
        navigate: (to:string) => void
    }}

    type temp = any

    export type withNavigationContextParams = (a: IFullPage) => JSX.Element | null
    export const withNavigationContext = (a: any) => JSX.Element;
}