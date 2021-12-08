import { ReactNode } from 'react';
import { BoxVariants } from '../../types';
import { generateClassNames } from '../../utils';
import { BoxClassNames } from '../../utils/DefaultClassNames';
// import { createClasses } from '../../utils';



export interface BoxProps {
    props?: object;
    // flex?: boolean;
    override?: boolean;
    className?: string;
    variant?: BoxVariants;
    children: ReactNode | Array<ReactNode>;
};


export default function Box({
    props,
    children,
    className,
    variant = 'row',
    override = false,
}: BoxProps):
    JSX.Element {
    // get default based on type, then pass into our GenerateClasses function
    const defaultClassNames = `${BoxClassNames(variant)}`;
    return (
        <div
            className={generateClassNames({
                nativeArgs: defaultClassNames,
                userArgs: className,
                override
            })}
            {...props}
        >
            {children}
        </div>
    )
};


