import { useState, useEffect, ReactNode } from "react";
import { DefaultProps } from "../../types/defaultProps";

export type SideBarItem = {
    label?: string | ReactNode | Array<ReactNode>;
    className?: string;
    href?: string;
    props?: any;
};

export interface SideBarProps extends DefaultProps {
    variant?: "start" | "center" | "end";
    textColor?: string;
    background?: string;
    items?: Array<SideBarItem>;
    showClose?: boolean;

};

export function justifyContent(variant: SideBarProps['variant']): string {
    switch (variant) {
        case "start":
            return "justify-start";
        case "center":
            return "justify-center";
        case "end":
            return "justify-end";
        default:
            return "justify-start";
    };
};
const inFocus = `focus:ring-2 focus:ring-blue-400 focus:p-4`;
const itemPad = `py-2 px-4`;
const hoverClasses = `hover:rounded-md hover:bg-gradient-to-r hover:from-indigo-400/40 dark:hover:from-green-300/40`
const activeItem = `border-l-2 border-l-indigo-500 dark:border-l-green-400 `
export default function SideBarComponent({
    items,
    variant,
    textColor = 'text-black dark:text-gray-300',
    background = "bg-gray-200 dark:bg-gray-800",
}: SideBarProps) {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {

    }, [isMounted]);

    if (!isMounted) return null

    return (
        // variant start center end can be controlled here with justify-start center or end
        <div className={`flex flex-col ${background} w-full h-full min-h-min p-1 ${justifyContent(variant)}  overflow-y-auto`}>
            {/* nav height can be controlled here */}
            <nav className='min-h-min '>
                <ul className='flex flex-col gap-5 items-center text-center min-h-min'>
                    {/* @ts-ignore */}
                    {items?.map(({ href, label, props }, index) =>
                    (
                        <li key={index} tabIndex={href ? -1 : index + 1} className={`w-full ${inFocus} ${itemPad} ${activeItem} ${hoverClasses}`} {...props}>
                            {href ? <a href={href} rel={'noopener noreferrer'} target={"_blank"} tabIndex={index + 1} className="focus:ring-2 focus:ring-blue-400 p-1">{label}</a> : { label }}
                        </li>
                    )
                    )}
                </ul>
            </nav>
        </div>
    );
}
