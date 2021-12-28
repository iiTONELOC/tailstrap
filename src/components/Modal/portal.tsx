import { ReactNode } from "react"
import { ModalProvider } from "../../context"
export default function ModalPortal({ children }:
    { children: ReactNode | Array<ReactNode> }) {
    return (
        <ModalProvider>
            <div id="__tailstrap_modal-wrapper" className="static">
                <div id='__tailstrap_modal-root'></div>
                {children}
            </div>
        </ModalProvider>
    );
};