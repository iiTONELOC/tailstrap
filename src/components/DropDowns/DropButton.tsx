import Box from "../Box";
import { useEffect, useState } from "react";
import Button, { ButtonProps } from "../Button";
import DropItem, { DropButtonItemProps } from "./DropButton.item";
import { generateClassNames } from "../../utils";

export interface DropButtonProps extends ButtonProps {
    dropItems?: Array<DropButtonItemProps>;
    dropListClassName?: string;
    dropListOverride?: boolean;
    dropItemClassName?: string;
    dropItemOverride?: boolean;
    dropContainerClassName?: string;
    dropContainerOverride?: boolean;
};


export default function DropButton({
    props,
    children,
    className,
    dropItems,
    size = 'lg',
    type = 'button',
    override = false,
    dropItemOverride,
    dropListOverride,
    dropListClassName,
    dropItemClassName,
    label = 'Click Me',
    variant = 'default',
    dropContainerOverride,
    dropContainerClassName,
}: DropButtonProps): JSX.Element | null {
    const [buttonID,] = useState(Date.now())
    const [isOpen, setIsOpen] = useState(false);
    const [dropWidth, setDropWidth] = useState(0);
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => { setMounted(false) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
    if (!isMounted || !buttonID) return null;

    const defaultListClasses = "bg-gray-300 absolute mt-2 rounded-md shadow-lg gap-2 z-50";
    const defaultContainerClasses = "flex flex-col items-center " + defaultListClasses + "p-1 hover:shadow-xl";

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
                {isOpen && dropWidth !== 0 && (
                    children ? (
                        <div
                            className={generateClassNames({
                                nativeArgs: defaultContainerClasses,
                                userArgs: dropContainerClassName,
                                override: dropContainerOverride
                            })}
                            style={{ width: dropWidth }}
                        >
                            {children}
                        </div>
                    )
                        : (
                            <ul
                                className={generateClassNames({
                                    nativeArgs: defaultListClasses,
                                    userArgs: dropListClassName,
                                    override: dropListOverride
                                })}
                                style={{ width: dropWidth }}
                            >
                                {/* @ts-ignore */}
                                {dropItems?.length > 0 && dropItems.map((item, index) => (
                                    <DropItem
                                        key={item.name || index}
                                        name={item?.name || undefined}
                                        child={item.child}
                                        override={dropItemOverride}
                                        className={dropItemClassName}
                                    />
                                ))}
                            </ul>
                        ))}
            </span>
        </Box >
    );
};
