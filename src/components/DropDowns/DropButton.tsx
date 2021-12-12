import Box from "../Box";
import { useEffect, useState } from "react";
import Button, { ButtonProps } from "../Button";
import DropItem, { DropItemProps } from "./DropButton.item";

export interface DropButtonProps extends ButtonProps, DropItemProps {
    dropItems?: Array<DropItemProps>;
};

export default function DropButton({
    props,
    children,
    className,
    dropItems,
    size = 'lg',
    type = 'button',
    override = false,
    label = 'Click Me',
    variant = 'default'
}: DropButtonProps): JSX.Element | null {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonID, setButtonID] = useState(0);
    const [dropWidth, setDropWidth] = useState(0);
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => { setMounted(false) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (isMounted && buttonID == 0) {
            setButtonID(Date.now());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted]);
    useEffect(() => {
        function setButtonWidth() {
            const thisButton = document?.getElementById(`__tailStrap_button-${buttonID}`);
            // @ts-ignore
            return setDropWidth(thisButton?.offsetWidth);
        };
        if (isMounted && isOpen) {
            setButtonWidth();
            window.addEventListener('resize', setButtonWidth);
        };
        return () => { window.removeEventListener('resize', setButtonWidth) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [buttonID, isOpen]);
    if (!isMounted || buttonID == 0) return null;

    return (
        <Box variant="col" className="static items-center">
            <span>
                <Button
                    size={size}
                    type={type}
                    label={label}
                    variant={variant}
                    override={override}
                    className={className}
                    props={{
                        onClick: () => setIsOpen(!isOpen),
                        id: `__tailStrap_button-${buttonID}`,
                        ...props
                    }}
                />
                {
                    /* 
                    FIXME: 
                    Use Styled Components to handle the size, using the style attribute for now.
                    */
                }
                {isOpen && dropWidth !== 0 && (
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
                                {/* @ts-ignore */}
                                {dropItems?.length > 0 && dropItems.map((item, index) => (
                                    item.href ? (
                                        <a
                                            href={item.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            key={item.name || index}
                                            {...item.listProps}
                                        >
                                            <DropItem
                                                name={item.name}
                                                child={item.child}
                                                listOverride={item.listOverride}
                                                listClassName={item.listClassName}
                                            />
                                        </a>
                                    ) : <DropItem
                                        key={item.name || index}
                                        name={item.name}
                                        child={item.child}
                                        listProps={item.listProps}
                                        listOverride={item.listOverride}
                                        listClassName={item.listClassName}
                                    />
                                ))}
                            </ul>
                        ))}
            </span>
        </Box >
    );
};
