import { ReactNode } from "react";
import { generateClassNames } from "../../utils";


export interface DropButtonItemProps {
    name?: string;
    href?: string;
    props?: object;
    override?: boolean;
    className?: string;
    child?: ReactNode | Array<ReactNode>;
};

export default function DropButtonItem({
    name,
    child,
    props,
    className,
    override = false,
}: DropButtonItemProps): JSX.Element {
    const defaultItemClassNames = 'bg-gray-300 hover:bg-gray-200 px-2 rounded-md w-full';
    const itemProps = props ? [...Object.keys(props)].filter(key => key !== 'href') : {};
    return (
        <li
            className={generateClassNames({
                nativeArgs: defaultItemClassNames,
                userArgs: className,
                override: override,
            })}
            {...itemProps}
        >
            {/* @ts-ignore */}
            {props?.href ?
                // @ts-ignore
                <a href={props?.href}
                    title={name}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {!child ? name : child}
                </a>
                : !child ? name : child
            }
        </li>
    );
};
