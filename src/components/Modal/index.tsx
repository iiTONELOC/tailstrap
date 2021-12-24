import ReactDOM from "react-dom";
import { PageProps } from "../Page";
import { useEffect, useState } from "react";
import { useModalContext } from "../../context/ModalContext";
import { PageClassNames } from "../../utils/DefaultClassNames";

export interface ModalProps extends PageProps {
};

export const getEl = (id: string): HTMLElement | undefined => {
    const el = document?.getElementById(id);
    if (el) return el;
};

export default function Modal({ variant = 'center', children }: ModalProps): JSX.Element | null {
    const [isMounted, setMounted] = useState(false);
    const { isOpen, closeModal } = useModalContext();

    useEffect(() => {
        if (!isMounted) {
            setMounted(true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        if (isOpen) getEl('__tailstrap_modal-root')?.scrollIntoView();
    }, [isOpen]);

    useEffect(() => {
        let scrolled = false
        if (!isOpen) {
            getEl("__tailstrap-Modal-previous")?.scrollIntoView({ block: 'center' });
            scrolled = true
        };
        if (scrolled) getEl("__tailstrap-Modal-previous")?.removeAttribute('id');
    }, [isOpen]);

    if (!isMounted) return null;
    const portal_El = getEl('__tailstrap_modal-root');

    function RenderModal(): JSX.Element {
        return (
            <div
                onDoubleClick={closeModal}
                className={`flex flex-col ${PageClassNames(variant)} 
                h-screen w-screen bg-black bg-opacity-25 z-50 absolute`}
            >
                {!children ? <h1 className="p-5 bg-fuchsia-600 text-gray-300 text-center">This is a modal{' '}Double Click anywhere to close!</h1> : children}
            </div>
        );
    };

    return (
        isOpen && isMounted ? (
            // @ts-ignore
            ReactDOM.createPortal(<RenderModal />, portal_El)
        ) : null
    );
};

