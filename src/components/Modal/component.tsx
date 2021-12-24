import { ModalProps } from ".";
import Button from "../Button";
import { ReactNode } from "react";
import { Sizes } from "../../types";
import { useModalContext } from "../../context/ModalContext";


type HeadingProps = {
    children: ReactNode | Array<ReactNode>;
    className?: string;
    size?: Sizes
    heading?: string;
}
export interface ModalComponentProps extends ModalProps {
    CloseIcon?: JSX.Element;
    Heading?: HeadingProps;
    Footer?: ReactNode | Array<ReactNode>;
}

export default function ModalComponent({
    variant,
    Footer,
    Heading,
    children,
    className,
    CloseIcon
}: any): JSX.Element {
    const { closeModal } = useModalContext();
    const modalClass = "h-auto rounded-lg z-50 w-96 sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-3/12";
    const defaultBackground = 'bg: gray-200 dark:bg-gray-800';
    const defaultText = 'text-black dark:text-gray-300';
    const modalDefaultClasses = `${defaultBackground} ${defaultText} ${modalClass}  
    ${className ? className : defaultBackground + defaultText}`

    return (
        <div className={modalDefaultClasses} >
            <header className='flex flex-row justify-center relative'>
                <span className="flex w-full items-center place-content-center text-gray-300 p-2">
                    {Heading?.children ? Heading.children : <h1 className="text-2xl md:text-3xl xl:text-4xl ">This is a modal</h1>}
                </span>
                {
                    CloseIcon ?
                        <span onClick={closeModal}>
                            {CloseIcon}
                        </span>
                        :
                        <Button className="p-2 absolute top-0 right-0" props={{ onClick: closeModal }}>
                            {/* x-circle https://heroicons.com/ */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" text-gray-300 hover:text-red-600 w-8  md:text-3xl xl:text-4xl "
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
            {children ? children : (
                <section className="mt-2 flex flex-col justify-center items-center">
                    <p>This is the model body</p>
                </section>
            )}
            {Footer ? Footer : <footer className="flex justify-center items-center p-4"> <p>Footer Elements Go Here</p></footer>}
        </div>
    )
};

