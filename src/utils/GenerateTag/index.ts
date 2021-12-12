import React from 'react';
import { ReactNode } from 'react';
import { HTML_Tags } from "../../types";

interface TagProps {
    tag: HTML_Tags;
    children: ReactNode | Array<ReactNode>;
    className?: string;
    props?: any;
    key?: string;
    wrap?: boolean;
};
export default function GenerateTag({
    key,
    tag,
    props,
    children,
    className,
}: TagProps): JSX.Element {
    const attributes = {
        className,
        ...props,
    };
    const href = props?.href;
    if (href !== undefined && href !== '#' && href.trim() !== '') {
        attributes.href = href;
        attributes.target = '_blank';
        attributes.rel = 'noopener noreferrer';
        attributes.key = key;
    }
    return React.createElement(tag, { ...attributes }, children);
};
// returns true false on if to render elm as <a></a>
export function renderAnchor(props: any): boolean {
    if (props?.href) {
        if (props?.href?.trim() == '') {
            return false;
        } else {
            return true;
        };
    };
    return false;
};