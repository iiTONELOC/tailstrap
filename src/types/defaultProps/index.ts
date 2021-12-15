import { ReactNode } from 'react';
export interface DefaultProps {
    variant?: string;
    override?: boolean;
    className?: string;
    props?: object | any;
    key?: string | number;
    children?: ReactNode | Array<ReactNode>;
};
