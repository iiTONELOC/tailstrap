import {
    ReactNode,
    createContext,
    useContext,
    useReducer
} from "react";



type Dispatch = (action: Action) => void;
type State = { isOpen: boolean };
type ModalProviderProps = { children: ReactNode | Array<ReactNode> };
type Action =
    | { type: 'openModal' }
    | { type: 'closeModal' }
    | { type: 'toggleModal' }
    | { type: 'setPrevious', payload: string }
    ;
export interface contextProps {
    modalState: State;
    dispatchModal: Dispatch;
};
const ModalStateContext = createContext<contextProps | undefined>(undefined);

function modalReducer(state: State, action: Action) {
    switch (action.type) {
        case 'openModal':
            return { isOpen: true }
        case 'closeModal':
            return { isOpen: false }
        case 'toggleModal':
            return { isOpen: !state.isOpen }
        default:
            throw new Error(`Unhandled action: ${action}`);
    };
};

export default function ModalContext({ children }: ModalProviderProps) {
    const [modalState, dispatchModal] = useReducer(modalReducer, { isOpen: false });
    const value = { modalState, dispatchModal };
    return (
        <ModalStateContext.Provider value={value}>
            {children}
        </ModalStateContext.Provider>
    );
};

export function useModalContext() {
    const context = useContext(ModalStateContext)
    if (context === undefined) {
        throw new Error('Modal must be used within a ModalProvider')
    } else {
        const { modalState, dispatchModal } = context;
        return {
            isOpen: modalState.isOpen,
            openModal: () => dispatchModal({ type: 'openModal' }),
            closeModal: () => dispatchModal({ type: 'closeModal' }),
            toggleModal: () => dispatchModal({ type: 'toggleModal' }),
            clickHandler: (e: any, action?: Function): void => {
                e.preventDefault();
                e.stopPropagation();
                e.target.setAttribute('id', "__tailstrap-Modal-previous")
                action ? action() : dispatchModal({ type: 'toggleModal' });
            }
        };
    };
};

