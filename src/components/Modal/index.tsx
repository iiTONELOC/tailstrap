import {
    useEffect,
    useState
} from "react";
import ReactDOM from "react-dom";
import { useModalContext } from "../../context/ModalContext";
import Page from "../Page";
export interface ModalProps {
    provider?: boolean
};

export default function Modal({ provider = true }: ModalProps) {
    const { isOpen } = useModalContext();
    const [isMounted, setMounted] = useState(false);
    const [docWidth, setDocWidth] = useState(0);
    const [docHeight, setDocHeight] = useState(0);
    useEffect(() => {
        if (!isMounted) {
            setMounted(true);
        };
    }, [isMounted]);
    function handleDimensions(): void {
        const { width, height } = document.body.getBoundingClientRect();
        console.log({ width, height });
        setDocWidth(width);
        setDocHeight(height);
    }
    useEffect(() => {
        if (isMounted) {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
            handleDimensions();
            window.addEventListener('resize', () => handleDimensions())
        };
    }, [isOpen]);
    if (!isMounted) return null;
    function getWidth() {
        if (docWidth > 0) {
            return docWidth;
        } else {
            return ''
        }
    };
    function getHeight() {
        if (docHeight > 0) {
            return docWidth;
        } else {
            return ''
        }
    };
    function RenderModal() {
        return (
            <h1>This is a modal</h1>
        )
    }

    const portalLoc = document.getElementById('modal-root');
    return (
        isOpen && isMounted ? (
            // @ts-ignore
            ReactDOM.createPortal(<RenderModal />, portalLoc)

        ) : null
    )
};