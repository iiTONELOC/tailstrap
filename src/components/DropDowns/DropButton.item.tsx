import { ReactNode } from "react";
export interface DropItemProps {
    name?: string;
    href?: string;
    listProps?: any;
    listOverride?: boolean;
    listClassName?: string;
    child?: ReactNode | Array<ReactNode>;
};

export default function DropItem({
    name,
    child,
    listProps,
    listOverride,
    listClassName,
}: DropItemProps): JSX.Element {

    return (
        <li
            className='hover:bg-gray-200 px-2 rounded-md w-full'
            {...listProps}
        >
            {!child ? name : child}
        </li>
    )
}