import {
    useEffect,
    useState
} from "react";
import ReactDOM from "react-dom";
import { useModalContext } from "../../context/ModalContext";
import { PageClassNames } from "../../utils/DefaultClassNames";
import { Props } from "../Page";
export interface ModalProps extends Props {
};

export default function Modal({ variant = 'center', children }: ModalProps) {
    const { isOpen, closeModal } = useModalContext();
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        if (!isMounted) {
            setMounted(true);
        };
    }, [isMounted]);
    useEffect(() => {
        if (isMounted) {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        };
    }, [isOpen]);
    if (!isMounted) return null;
    function RenderModal() {
        return (
            <div
                onDoubleClick={closeModal}
                className={`flex flex-col ${PageClassNames(variant)} 
                h-screen w-screen bg-black bg-opacity-25 z-50 absolute`}
            >
                {!children ? <h1 className="p-5 bg-fuchsia-600 text-gray-300 text-center">This is a modal{' '}Double Click anywhere to close!</h1> : children}
            </div>
        )
    }

    const portalLoc = document.getElementById('__tailstrap_modal-root');
    return (
        isOpen && isMounted ? (
            // @ts-ignore
            ReactDOM.createPortal(<RenderModal />, portalLoc)
        ) : null
    )
};