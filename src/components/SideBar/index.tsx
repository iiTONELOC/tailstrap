import Button from "../Button";
import { MenuIcon } from "../../Icons";
import { checkMobile } from "../Navigation/utils";
import { useEffect, useState, ReactNode } from "react";
import SideBarComponent, { justifyContent, SideBarProps } from "./component";
import ToolTip from "../ToolTip";



export interface SideBarLayoutProps extends SideBarProps {
    side?: ReactNode | Array<ReactNode>;
    main?: ReactNode | Array<ReactNode>
    responsiveBreakpoint?: number;
    responsive?: boolean;
};

export default function SideBar({
    main,
    items,
    variant,
    responsive = true,
    responsiveBreakpoint,
    textColor = 'text-black dark:text-gray-400',
    background = "bg-gray-200 dark:bg-gray-900",
}: SideBarLayoutProps): JSX.Element | null {
    const defaultClasses = {
        section: {
            defaultClass: `flex flex-row w-screen h-screen overflow-auto ${textColor}`,
            responsiveClass: `flex flex-col md:flex-row w-screen h-screen overflow-auto ${textColor}`,
        },
        side: {
            defaultClass: `${background} min-w-min max-w-xs min-h-screen`,
            responsiveClass: `${background} md:max-w-screen-sm md:min-h-screen ${justifyContent(variant)}`,
        },
        main: {
            defaultClass: "bg-white dark:bg-gray-600 w-full min-h-screen p-1",
            responsiveClass: "bg-white dark:bg-gray-600 w-full h-full p-1",
        }
    };

    // show controls the visibility of the sidebar
    const [show, setShow] = useState(true);
    // isMobile is true when the screen is smaller than the responsiveBreakpoint
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const [sideClasses, setSideClasses] = useState(defaultClasses.side.defaultClass);
    const [mainClasses, setMainClasses] = useState(defaultClasses.main.defaultClass);
    const [sectionClasses, setSectionClasses] = useState(defaultClasses.section.defaultClass);


    useEffect(() => {
        setMounted(true);
        // if responsive handle the breakpoint for the responsive layout
        // responsiveBreakpoint is the width of the screen when the layout should be responsive set by user or
        // defaults to 768px in the checkMobile function
        responsive ? setIsMobile(checkMobile(responsiveBreakpoint)) : null
        return () => {
            setMounted(false);
            console.log(`Removing event listener`)
            window.addEventListener('resize', () => {
                setShow(!checkMobile());
                setIsMobile(checkMobile());
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function setClasses(scenario: 'defaultClass' | 'responsiveClass') {
        setSideClasses(defaultClasses.side[scenario]);
        setMainClasses(defaultClasses.main[scenario]);
        setSectionClasses(defaultClasses.section[scenario]);
    }

    // adds event listener to the window
    useEffect(() => {
        if (isMounted && responsive) {
            console.log(`Adding event listener`)
            window.addEventListener('resize', () => {
                setShow(!checkMobile());
                setIsMobile(checkMobile());
            });
        }
        return () => {
        }
    }, [isMounted, responsive])

    // sets the classes for the sidebar and main
    useEffect(() => {
        if (isMounted) {
            if (isMobile) {
                setClasses('responsiveClass');
                if (responsive) setShow(false);
            } else {
                setClasses('defaultClass');
                if (responsive) setShow(true);
            }
        }
    }, [isMobile]);

    if (!isMounted) return null

    function responsiveLayoutHandler() {
        if (responsive) {
            if (isMobile) {
                if (!show) {
                    return (
                        <ToolTip
                            tip='Click to show the sidebar'
                        >
                            <Button className={textColor + ' hover:text-blue-400 dark:hover:text-green-400'} props={{ onClick: () => setIsMobile(!isMobile) }}>
                                <MenuIcon className={'w-12 h-12'} />
                            </Button>
                        </ToolTip>

                    );
                } else {
                    return <SideBarComponent items={items} showClose={true} />;
                }
            } else {
                return <SideBarComponent items={items} />;
            }
        } else {
            return <SideBarComponent items={items} />;
        };
    };

    return (
        <section className={sectionClasses}>
            <div className={sideClasses}>
                {responsiveLayoutHandler()}
            </div>
            <div className={mainClasses}>
                {main}
            </div>
        </section>
    );
};
