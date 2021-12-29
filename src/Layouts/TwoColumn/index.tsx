import { ReactNode } from "react"
const defaultClasses = {
    section: {
        defClass: "flex flex-col flex-row w-screen h-screen overflow-hidden ",
        responsive: "flex flex-col md:flex-row w-screen h-screen overflow-hidden ",
    },
    side: {
        defClass: "bg-black max-w-screen-sm min-h-screen text-gray-400",
        responsive: "bg-black md:max-w-screen-sm md:min-h-screen text-gray-400",
    },
    main: {
        defClass: "bg-green-600 w-full min-h-screen",
        responsive: "bg-green-600 w-full min-h-full md:min-h-screen",
    }
}

export interface TwoColumnLayoutProps {
    responsive?: boolean;
    side?: ReactNode | Array<ReactNode>;
    main?: ReactNode | Array<ReactNode>
}
export default function Container_2Col({ responsive, side, main }: TwoColumnLayoutProps): JSX.Element {
    console.log(side)
    return (
        <section className={responsive ? defaultClasses.section.responsive :
            defaultClasses.section.defClass}
        >
            <div className={responsive ? defaultClasses.side.responsive :
                defaultClasses.side.defClass}
            >
                {side}
            </div>

            <div className={responsive ? defaultClasses.main.responsive :
                defaultClasses.main.defClass}
            >
                {main}
            </div>
        </section>
    )
}