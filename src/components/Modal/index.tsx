import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { useModalContext } from "../../context/ModalContext";
import { PageClassNames } from "../../utils/DefaultClassNames";
import ModalComponent, { ModalComponentProps } from "./component";

export interface ModalProps extends ModalComponentProps {
    clickOutside?: boolean;
};

export const getEl = (id: string): HTMLElement | undefined => {
    const el = document?.getElementById(id);
    if (el) return el;
};

export default function Modal({
    children,
    className,
    variant = 'center',
    clickOutside = false,
}: ModalProps): JSX.Element | null {
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
        let focused = false
        if (!isOpen) {
            getEl("__tailstrap-Modal-previous")?.scrollIntoView({ block: 'center' });
            scrolled = true
            getEl("__tailstrap-Modal-previous")?.focus()
            focused = true

        };
        if (scrolled && focused) getEl("__tailstrap-Modal-previous")?.removeAttribute('id');
    }, [isOpen]);

    if (!isMounted) return null;
    const portal_El = getEl('__tailstrap_modal-root');

    function RenderModal(): JSX.Element {

        function ModalWrapper({ children }: any): JSX.Element {
            return (
                <div
                    onDoubleClick={clickOutside ? closeModal : () => { }}
                    className={`flex flex-col ${PageClassNames(variant)} h-screen w-screen bg-black bg-opacity-25 z-10 
                    absolute`}
                >
                    {children}
                </div>
            );
        };
        return (
            <ModalWrapper>
                {children ? children : <ModalComponent className={className} />}
            </ModalWrapper>
        );
    };

    return (
        isOpen && isMounted ? (
            // @ts-ignore
            ReactDOM.createPortal(<RenderModal />, portal_El)
        ) : null
    );
};

