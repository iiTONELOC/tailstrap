import { useState, useEffect } from 'react';
import { DefaultProps } from '../../../types/defaultProps';
import { generateClassNames, GenerateTag } from '../../../utils';

export interface ItemProps extends DefaultProps {
    name?: string;
    active?: string;
    textColor?: string;
    hoverColor?: string;
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
    textColor = 'black',
    hoverColor = 'blue-500',
}: ItemProps): JSX.Element {
    const [isMounted, setMounted] = useState(false);
    const [activeClasses, setActiveClasses] = useState('');
    const defaultActiveLinkClassNames = `text-${hoverColor} underline underline-offset`;
    const defaultClassNames = `p-1 font-medium text-${textColor} hover:text-${hoverColor} ${activeClasses} cursor-pointer`;

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        if (window?.location?.href === props?.href && !override) {
            setActiveClasses(active ? active : defaultActiveLinkClassNames);
        } else if (!props.href && window?.location?.pathname === props?.name && !override) {
            setActiveClasses(active ? active : defaultActiveLinkClassNames);
        } else {
            setActiveClasses('');
        }
    }, [isMounted]);

    return (
        <li>
            {
                name || typeof children == 'string' ? (
                    <GenerateTag
                        tag="a"
                        className={generateClassNames({
                            nativeArgs: defaultClassNames,
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