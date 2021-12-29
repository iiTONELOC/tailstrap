import { TwoColumn } from "../../Layouts";
import { TwoColumnLayoutProps } from "../../Layouts/TwoColumn";


/*
sidebar returns a 2 column layout
on mobile the left column becomes a hamburger menu

*/
export interface SideBarProps extends TwoColumnLayoutProps {

}

export default function SideBar({ responsive, side, main }: SideBarProps): JSX.Element {
    return (
        <TwoColumn responsive={responsive} side={side} main={main} />
    )
}




// <section className="flex flex-col md:flex-row w-screen h-screen overflow-hidden ">
//     <div className="bg-black md:max-w-screen-sm md:min-h-screen text-gray-400">
//         Sidebar goes here
//     </div>

//     <div className="bg-green-600 w-full min-h-full md:min-h-screen">
//     </div>
// </section>