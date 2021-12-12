import Box from "../Box";
import Button, { ButtonProps } from "../Button";
import { useEffect, useState, createRef, ReactNode } from "react";

export interface DropButtonProps extends ButtonProps {
    listProps?: any;
    listOverride?: boolean;
    listClassName?: string;
    dropItems?: [];
}


export default function DropButton({
    props,
    label = 'Click Me',
    children,
    className,
    listProps,
    dropItems,
    size = 'lg',
    listOverride,
    listClassName,
    type = 'button',
    override = false,
    variant = 'default' }: DropButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const [dropWidth, setDropWidth] = useState(0);
    const thisButton = createRef();
    const handleClick = () => {
        return setIsOpen(!isOpen);
    };
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    useEffect(() => {
        if (isMounted) {
            // @ts-ignore
            setDropWidth(thisButton.current.offsetWidth);
        }
    }, [isMounted]);
    if (!isMounted) return null;
    return (
        <Box
            variant="col"
            className="static items-center"
        >
            <span>
                <Button
                    size={size}
                    type={type}
                    label={label}
                    variant={variant}
                    override={override}
                    className={className}
                    props={{
                        onClick: handleClick,
                        ref: thisButton,
                        ...props
                    }}
                />
                {isOpen && (
                    children ? (
                        <div
                            className="flex flex-col items-center bg-gray-300 hover:bg-gray-200
                            absolute mt-2 rounded-md shadow-lg gap-2 z-50 p-1 hover:shadow-xl"
                            style={{ minWidth: dropWidth }}
                        >
                            {children}
                        </div>
                    )
                        : (
                            <ul
                                className="bg-gray-300 absolute mt-2 rounded-md shadow-lg gap-2 z-50"
                                style={{ minWidth: dropWidth }}
                            >
                                <li className='hover:bg-gray-200 px-2 rounded-md'>
                                    ITEM
                                </li>

                            </ul>
                        )
                )}
            </span>
        </Box>

    )
};
