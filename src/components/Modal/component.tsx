import Button from "../Button";
import { ReactNode } from "react";
import { PageProps } from "../Page";
import { Sizes } from "../../types";
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


export default function ModalComponent({
    Body,
    Footer,
    variant,
    Heading,
    children,
    className,
    CloseIcon
}: any): JSX.Element {
    const { closeModal } = useModalContext();
    const defaultClassNames = className || defaultClasses();

    const modalButtons = [
        {
            label: 'OK',
            size: 'lg',
            props: { onClick: closeModal },
            background: 'bg-gray-500 dark:bg-gray-700 hover:bg-green-500',
        },
        {
            label: 'Cancel',
            size: 'lg',
            props: { onClick: closeModal },
            background: 'bg-indigo-600 dark:bg-indigo-700 hover:bg-red-500',
        }
    ];

    return (
        !children ? (
            <div className={defaultClassNames} >
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
                                props={{ onClick: closeModal }}
                                className="p-2 absolute top-0 right-0 -mt-1 -mr-2"
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
                            {modalButtons.map(button => <Button key={button.label} {...button} />)}
                        </footer>
                }
            </div>
        ) : children
    );
};

