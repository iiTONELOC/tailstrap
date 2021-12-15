import { ReactNode } from 'react';
export interface DefaultProps {
    props?: object | any;
    override?: boolean;
    className?: string;
    variant?: string;
    children?: ReactNode | Array<ReactNode>;
};
