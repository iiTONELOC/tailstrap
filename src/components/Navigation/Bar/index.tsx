import { ReactNode } from 'react';
import Item, { ItemProps } from '../Item';
import { DefaultProps } from '../../../types/defaultProps';
import { generateClassNames } from '../../../utils';


export interface BarProps extends DefaultProps {
    bgColor?: string;

    spacing?: 'string'
    variant?: 'left' | 'right' | 'center';
    navItems?: Array<ReactNode> | Array<ItemProps>;
};

const handleVariant = (variant: BarProps['variant']) => {
    switch (variant) {
        case 'left':
            return 'justify-start';
        case 'right':
            return 'justify-end';
        case 'center':
            return 'justify-center';
        default:
            return 'justify-start';
    };
};

export default function Bar({
    props,
    spacing,
    variant,
    bgColor,
    children,
    override,
    className,
    navItems,
}: BarProps): JSX.Element {
    const defaultNavBarClasses = `p-1 flex flex-row ${handleVariant(variant)} bg-${bgColor} w-full`;

    return (
        <nav className={generateClassNames({
            nativeArgs: defaultNavBarClasses,
            userArgs: className,
            override
        })}
            {...props}
        >
            <ul className={spacing ? spacing : 'gap-2'}>
                {!children && navItems ? navItems.map((item, index) => (
                    <Item
                        // @ts-ignore
                        key={'nav' + item?.name || index}
                        {...item}
                    />
                )) : children}
            </ul>
        </nav>
    )
};