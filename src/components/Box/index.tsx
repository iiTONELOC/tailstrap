import { ReactNode } from 'react';
import { BoxVariants } from '../../types';
import { DefaultProps } from '../../types/defaultProps';
import { generateClassNames, GenerateTag } from '../../utils';
import { BoxClassNames } from '../../utils/DefaultClassNames';

export interface BoxProps extends DefaultProps {
    variant?: BoxVariants;
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
        <GenerateTag
            // @ts-ignore
            tag={props?.as || 'div'}
            className={generateClassNames({
                nativeArgs: defaultClassNames,
                userArgs: className,
                override
            })}
            {...props}
        >
            {children}
        </GenerateTag>
    );
};


