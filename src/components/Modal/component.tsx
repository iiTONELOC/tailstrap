import Button from "../Button";
import { PageProps } from "../Page";
import { Sizes } from "../../types";
import { ReactNode, useState, useEffect } from "react";
import { useModalContext } from "../../context/ModalContext";




type HeadingProps = {
    size?: Sizes
    heading?: string;
    className?: string;
    children: ReactNode | Array<ReactNode>;
};

export interface ModalComponentProps extends PageProps {
    Body?: ReactNode | Array<ReactNode>;
    Footer?: ReactNode | Array<ReactNode>;
    Heading?: HeadingProps;
    CloseIcon?: JSX.Element;
};

const modalDefaults = {
    modalText: `text-black dark:text-gray-300`,
    modalBackground: `bg-gray-100 dark:bg-gray-800`,
    modalBorder_borderRadius: `rounded-lg border-1 border-black dark:border-gray-600`,
    modalWidth_modalHeight: `h-auto z-50 w-96 sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12`,
};

const modalHeading = `flex w-full items-center place-content-center text-black dark:text-gray-300 p-2 text-2xl md:text-3xl xl:text-4xl underline`;

const defaultClasses = (): string => {
    let string = ''
    for (const [, value] of Object.entries(modalDefaults)) {
        string += `${value} `
    }
    return string
};

const tailstrapIDs = {
    modal: '__tailstrap_modal-root',
    modalOk: '__tailstrap_modal-ok-button',
    modalClose: '__tailstrap_modal-close-button',
    modalCancel: '__tailstrap_modal-cancel-button',
};


export default function ModalComponent({
    Body,
    Footer,
    variant,
    Heading,
    children,
    className,
    CloseIcon
}: any): JSX.Element {
    const [tabs, setTabs] = useState<NodeListOf<HTMLElement> | undefined>(undefined);
    const { closeModal } = useModalContext();
    const [isMounted, setMounted] = useState(false);
    const defaultClassNames = className || defaultClasses();
    const modalButtons = [
        {
            label: 'OK',
            size: 'lg',
            props: { onClick: closeModal, id: tailstrapIDs.modalOk, tabIndex: 0 },
            background: 'bg-gray-500 dark:bg-gray-700 hover:bg-green-500',
            className: 'focus:ring-2 focus:ring-blue-500 ',
        },
        {
            label: 'Cancel',
            size: 'lg',
            props: { onClick: closeModal, id: tailstrapIDs.modalClose, tabIndex: 1 },
            background: 'bg-indigo-600 dark:bg-indigo-700 hover:bg-red-500',
            className: 'focus:ring-2 focus:ring-blue-500 ',
        }
    ];
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
            }
        } else {
            console.log(e.key)
        }
    };

    useEffect(() => {
        setMounted(true);
        setTabs(document?.querySelectorAll('[tabindex]'))
        // @ts-ignore
        document?.getElementById(`${tailstrapIDs.modalOk}`).focus();
        return () => {
            setMounted(false);
            setTabs(undefined);
            window.removeEventListener('keydown', () => { });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (isMounted) window.addEventListener('keydown', (e) => handleTab(e));
    }, [isMounted]);

    return (
        !children ? (
            <div className={defaultClassNames} id={tailstrapIDs.modal}>
                <header className='flex flex-row justify-center relative'>
                    <span className={Heading?.classNames || modalHeading}>
                        {
                            Heading?.children ? Heading.children :
                                <h1>
                                    This is a modal
                                </h1>
                        }
                    </span>
                    {
                        CloseIcon ?
                            <span onClick={closeModal}>
                                {CloseIcon}
                            </span>
                            :
                            <Button
                                props={{ onClick: closeModal, id: tailstrapIDs.modalClose, tabIndex: 2 }}
                                className="absolute top-0 right-0 -mt-1 -mr-2 rounded-full focus:ring-2 focus:ring-blue-500"
                            >
                                {/* x-circle https://heroicons.com/ */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gray-400 hover:text-red-600 w-8 md:text-3xl xl:text-4xl "
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </Button>
                    }
                </header>
                {Body ? Body : (
                    <section className="mt-2 flex flex-col justify-center items-center p-2">
                        <p className="text-xl">This is the model body</p>
                    </section>
                )}
                {
                    Footer ? Footer :
                        <footer className=" flex justify-end items-center p-2 gap-4">
                            {/* @ts-ignore */}
                            {modalButtons.map(button => <Button key={button.props.id} {...button} />)}
                        </footer>
                }
            </div>
        ) : children
    );
};

