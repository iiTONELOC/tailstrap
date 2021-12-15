import { ReactNode } from 'react';
import { generateClassNames, GenerateTag } from '../../../utils';

export interface ItemProps {
    props?: object;
    // flex?: boolean;
    override?: boolean;
    className?: string;
    variant?: string;
    children: ReactNode | Array<ReactNode>;
};