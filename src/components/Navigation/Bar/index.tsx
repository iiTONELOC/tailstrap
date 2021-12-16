import Item, { ItemProps } from '../Item';
import { MenuIcon } from '@heroicons/react/solid';
import { generateClassNames } from '../../../utils';
import { ReactNode, useState, useEffect } from 'react';
import { DefaultProps } from '../../../types/defaultProps';
import { checkMobile, handleMobileClassNames, handleVariant } from '../utils';

export interface BarProps extends DefaultProps {
    spacing?: 'string';
    overrideResponsiveNav?: boolean;
    variant?: 'left' | 'right' | 'center';
    navItems?: Array<ReactNode> | Array<ItemProps>;
};

export default function Bar({
    props,
    spacing,
    variant,
    children,
    navItems,
    className,
    override = false,
    overrideResponsiveNav = false,
}: BarProps): JSX.Element | null {
    const [navID,] = useState(Date.now());
    const [mobile, setMobile] = useState(false);
    const [isMounted, setMounted] = useState(false);
    const [show, setShow] = useState(!overrideResponsiveNav ? !checkMobile() : true);
    const defaultNavBarClasses = `p-1 flex flex-wrap flex-row ${handleVariant(variant)} w-full`;

    function handleClick(e: React.MouseEvent): void {
        e.preventDefault();
        e.stopPropagation();
        setShow(!show);
        handleMobileClassNames({
            show,
            navID,
            defaultClasses: defaultNavBarClasses,
            userArgs: className || '',
            override
        });
    };

    useEffect(() => {
        setMounted(true);
        if (!overrideResponsiveNav) {
            setMobile(checkMobile());;
        };
        return () => setMounted(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (isMounted && !overrideResponsiveNav) {
            window.addEventListener('resize', () => {
                setShow(!checkMobile());
                setMobile(checkMobile());;
                handleMobileClassNames({
                    show: !show,
                    navID,
                    defaultClasses: defaultNavBarClasses,
                    userArgs: className || '',
                    override
                })
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <nav
            id={!overrideResponsiveNav ? `__tailStrap_navBar-${navID}` : null}
            className={generateClassNames({
                nativeArgs: defaultNavBarClasses,
                userArgs: className,
                override
            })}
            {...props}
        >
            {mobile && (
                <span className='w-12 self-center place-self-start bg-blue-300'>
                    <MenuIcon onClick={handleClick} />
                </span>
            )}
            {show && <ul className={`${!overrideResponsiveNav ?
                `flex flex-wrap flex-col md:flex md:flex-wrap md:flex-row` :
                `flex flex-wrap flex-row`} ${spacing ? spacing : 'gap-2'}`}>
                {!children && navItems ? navItems.map((item, index) => (
                    <Item
                        // @ts-ignore
                        key={'nav' + item?.name || index}
                        {...item}
                    />
                )) : children}
            </ul>}
        </nav>
    );
};