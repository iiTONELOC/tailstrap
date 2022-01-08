import { useState, useEffect, ReactNode } from "react";
import { XIcon } from "../../Icons";
import { DefaultProps } from "../../types/defaultProps";
import Button from "../Button";
import ToolTip from "../ToolTip";

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
    mobileSetter?: Function;
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
const activeItem = `border-l-2 border-l-indigo-500 dark:border-l-green-400 rounded-md bg-gradient-to-r from-indigo-400/40 dark:from-green-300/40 underline underline-offset-2 `;
export default function SideBarComponent({
    items,
    variant,
    showClose,
    mobileSetter,
    textColor = 'text-black dark:text-gray-300',
    background = "bg-gray-200 dark:bg-gray-800",
}: SideBarProps) {
    const [isMounted, setMounted] = useState(false);
    const [sideItems, setSideItems] = useState(Array<SideBarItem>());
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        //    check window href against items href
        if (isMounted && items) {
            // loop through items
            const updatedItems = items.map(item => {
                const href = item?.href || undefined
                if (href) {
                    if (window.location.href === href ||
                        window.location.pathname === href ||
                        window.location.pathname === item.label) {
                        return {
                            ...item,
                            props: {
                                ...item?.props,
                                active: "true"
                            }
                        }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
            setSideItems(updatedItems)
        }
    }, [isMounted]);

    if (!isMounted) return null
    return (isMounted &&
        // variant start center end can be controlled here with justify-start center or end
        <div className={`flex flex-col ${background} w-full h-full min-h-min p-1 ${justifyContent(variant)} overflow-y-auto gap-3 static`}>
            {showClose && showClose !== undefined &&
                <span className="absolute place-self-end top-0">
                    <ToolTip tip='Close SideBar' variant="right" marginAmount="mx-12 mt-10">
                        <Button
                            props={{ onClick: mobileSetter, tabIndex: 1 }}
                            override={true}
                            className={`${inFocus} hover:bg-gray-300 dark:hover:bg-gray-800 p-1 rounded-lg`}
                        >
                            <XIcon className='h-7 w-7 text-gray-900 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-green-400' />
                        </Button>
                    </ToolTip>
                </span>
            }

            {/* nav height can be controlled here */}
            <nav className='min-h-min '>
                <ul className='flex flex-col gap-4 items-center text-center min-h-min font-normal'>
                    {/* @ts-ignore */}
                    {sideItems?.map(({ href, label, props }, index) =>
                    (<li
                        key={index}
                        tabIndex={href ? -1 : index + 1}
                        className={`w-full ${inFocus} ${itemPad} ${props?.active === 'true' ? activeItem : ''} ${hoverClasses}`}
                        {...props}
                    >
                        {href ? <a
                            href={href}
                            rel={'noopener noreferrer'}
                            target={"_blank"}
                            tabIndex={index + 1}
                            className="focus:ring-2 focus:ring-blue-400 p-1"
                        >{label}
                        </a> : { label }}
                    </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
