import { useState, useEffect } from 'react';
import { DefaultProps } from '../../../types/defaultProps';
import { generateClassNames, GenerateTag } from '../../../utils';

export interface ItemProps extends DefaultProps {
    name?: string;
    active?: string;
    overrideOpener?: boolean;
};

export default function Item({
    name,
    props,
    active,
    children,
    override,
    className,
    overrideOpener,
}: ItemProps): JSX.Element {
    const [isMounted, setMounted] = useState(false);
    const [activeClasses, setActiveClasses] = useState('');
    const defaultAnchorClassNames = `p-1 font-medium ${activeClasses}`;
    const liDefaultClassNames = ` hover:text-blue-500 text-black cursor-pointer`;
    const defaultActiveLinkClassNames = `text-blue-500 underline underline-offset`;


    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (window?.location?.href === props?.href && !override) {
            setActiveClasses(active ? active : defaultActiveLinkClassNames);
        } else if (window?.location?.pathname === props?.name && !override || window?.location?.pathname === props?.href && !override) {
            setActiveClasses(active ? active : defaultActiveLinkClassNames);
        } else {
            setActiveClasses('');
        }
    }, [isMounted]);

    return (
        <li
            className={generateClassNames({
                nativeArgs: liDefaultClassNames,
                override
            })}
        >
            {
                name || typeof children == 'string' ? (
                    <GenerateTag
                        tag="a"
                        className={generateClassNames({
                            nativeArgs: defaultAnchorClassNames,
                            userArgs: className,
                            override
                        })}
                        override={overrideOpener}
                        props={...props}
                    >
                        {!children ? name : children}
                    </GenerateTag>
                ) : (children)
            }
        </li>
    );
};