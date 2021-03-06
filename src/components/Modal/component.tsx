import Button from "../Button";
import { PageProps } from "../Page";
import { Sizes } from "../../types";
import { CloseIcon as Close } from "../../Icons";
import { ReactNode, useState, useEffect } from "react";
import { fontSizes } from "../../utils/DefaultClassNames/Size";

type HeadingProps = {
    size?: Sizes
    className?: string;
    children?: ReactNode | Array<ReactNode>;
};

export interface ModalComponentProps extends PageProps {
    Body?: ReactNode | Array<ReactNode>;
    Footer?: ReactNode | Array<ReactNode>;
    Heading?: HeadingProps;
    CloseIcon?: JSX.Element;
    closeModal?: Function;
    focus?: string;
    title?: string;
    width?: string;
    height?: string;
    border?: string;
    useEsc?: boolean;
    message?: string;
    padding?: string;
    textColor?: string;
    background?: string;
    transitions?: string;
};

const tailstrapIDs = {
    modal: '__tailstrap_modal-root',
    firstFocus: '__tailstrap_modal-ok-button',
};

const modalButtons = [
    {
        label: 'OK',
        size: 'lg',
        background: 'bg-gray-500 dark:bg-gray-700 hover:bg-green-500'
    },
    {
        label: 'Cancel',
        size: 'lg',
        background: 'bg-indigo-600 dark:bg-indigo-700 hover:bg-red-500',
    }
];

const defaultClasses = (data: object): string | void => {

    let string = ''
    for (const [, value] of Object.entries(data)) {
        string += `${value} `
    }
    return string
};

export default function ModalComponent({
    Body,
    width,
    focus,
    Footer,
    height,
    useEsc,
    border,
    padding,
    Heading,
    children,
    CloseIcon,
    textColor,
    className,
    closeModal,
    background,
    transitions,
    title = 'Title goes here',
    message = 'Message goes here.',

}: any): JSX.Element {
    const [isMounted, setMounted] = useState(false);
    const [tabs, setTabs] = useState<NodeListOf<HTMLElement> | undefined>(undefined);

    const modalDefaults = {
        modalText: textColor || `text-black dark:text-gray-300`,
        modalBackground: background || `bg-gray-100 dark:bg-gray-800`,
        modalBorder_borderRadius: border || `rounded-lg border-1 border-black dark:border-gray-600`,
        modalWidth_modalHeight: `${width !== undefined && height !== undefined ? width + height :
            `h-auto z-50 w-96 sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12`
            } `,
    };

    const modalPadding = padding || 'p-2';
    const modalFocus = focus || "focus:ring-2 focus:ring-blue-500"
    const modalTransitions = transitions || "transition ease-in duration-300";
    const modalHeading = Heading?.className || `flex w-full items-center place-content-center text-center ${modalPadding} text-2xl md: text-3xl xl: text-4xl underline underline-offset-4 decoration-indigo-500 dark:decoration-green-400`;
    const MyButtons = modalButtons.map((button, i) => {
        return {
            ...button,
            props: {
                tabIndex: i,
                taildata: i,
                onClick: closeModal,
                id: i === 0 ? tailstrapIDs.firstFocus : undefined,
            },
            className: `${modalFocus} ${transitions || modalTransitions} `,
        }
    });
    const defaultClassNames = !children ? className || defaultClasses(modalDefaults) : ''
    // tabIndex={0} is focused when the modal mounts
    // set initial count to 1 to to go the next button

    let count = 1;
    const handleTab = (e: any): void => {
        e.preventDefault();
        if (e.key === "Tab" && tabs) {
            const tabLength = tabs?.length;
            for (const [, value] of Object.entries(tabs)) {
                if (value.tabIndex === count) value.focus();
            };
            if (count === tabLength - 1 || count + 1 >= tabLength) { count = 0 }
            else { count++ };
        } else if (e.key === 'Enter' && tabs) {
            const active = document.activeElement;
            if (active?.localName === 'button') {
                closeModal();
            };
        } else if (e.key === 'Escape' && tabs && useEsc) {
            closeModal();
        };
    };

    useEffect(() => {
        setMounted(true);
        setTabs(document?.querySelectorAll('[taildata]'))
        // @ts-ignore
        if (closeModal) document.getElementById(`${tailstrapIDs.firstFocus}`)?.focus();

        return () => {
            setMounted(false);
            setTabs(undefined);
            closeModal ? document.getElementById(`${tailstrapIDs.modal}`)?.removeEventListener('keydown', (e) => handleTab(e)) : null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (closeModal) {
            const modal = document.getElementById(`${tailstrapIDs.modal}`);
            if (isMounted && modal) modal.addEventListener('keydown', (e) => handleTab(e));
        }

    }, [isMounted]);

    return (
        !children ? (
            <div className={defaultClassNames + ' drop-shadow-xl'} id={tailstrapIDs.modal}>
                <header className='flex flex-row justify-center relative'>
                    <span className={modalHeading}>
                        {
                            Heading?.children ? Heading.children :
                                <h1 className={Heading?.size ? fontSizes(Heading?.size) : ''}>
                                    {title}
                                </h1>
                        }
                    </span>
                    {
                        CloseIcon ?
                            // @ts-ignore
                            <span onClick={closeModal} taildata={2} tabIndex={2}>
                                {CloseIcon}
                            </span>
                            :
                            <Button
                                props={{ onClick: closeModal, taildata: 2, tabIndex: 2 }}
                                className={`absolute top-0 right-0 -mt-2 -mr-3 rounded-full ${modalFocus} `}
                            >
                                <Close
                                    className="text-gray-400 hover:text-red-600 w-8 md:text-3xl xl:text-4xl transition ease-in duration-300"
                                />
                            </Button>
                    }
                </header>
                {Body ? Body : (
                    <section className={`mt-2 flex flex-col justify-center items-center ${modalPadding}`}>
                        <p className="text-xl">{message}</p>
                    </section>
                )}
                {
                    Footer ? Footer :
                        <footer className={` flex justify-end items-center ${modalPadding} gap-4`}>
                            {/* @ts-ignore */}
                            {MyButtons.map(button => <Button key={button.props.tabIndex} {...button} />)}
                        </footer>
                }
            </div>
        ) : children
    );
};

