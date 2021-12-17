import React from 'react';
import { HTML_Tags } from "../../types";
import { DefaultProps } from '../../types/defaultProps';

interface TagProps extends DefaultProps {
    tag: HTML_Tags;
    wrap?: boolean;
};
export default function GenerateTag({
    key,
    tag,
    props,
    children,
    override,
    className,

}: TagProps): JSX.Element {
    const attributes = {
        className,
        ...props,
    };
    const href = props?.href;
    if (href !== undefined && href !== '#' && href.trim() !== '') {
        attributes.href = href;
        if (!override) attributes.target = '_blank';
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