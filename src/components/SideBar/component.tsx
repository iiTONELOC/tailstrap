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

export default function SideBarComponent({
    items,
    variant,
    textColor = 'text-black dark:text-gray-400',
    background = "bg-gray-200 dark:bg-gray-900",
}: SideBarProps) {
    const [isMounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <li key={index}  {...props}>
                            {href ? <a href={href}>{label}</a> : { label }}
                        </li>
                    )
                    )}
                </ul>
            </nav>
        </div>
    );
}
