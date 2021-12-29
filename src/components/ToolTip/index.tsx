import { useState, useEffect } from "react";
import { Sizes } from "../../types";
import { DefaultProps } from "../../types/defaultProps";
import { fontSizes } from "../../utils/DefaultClassNames/Size";


export interface ToolTipProps extends DefaultProps {
    variant?: 'top' | 'bottom' | 'left' | 'right';
    marginAmount?: string;
    background?: string;
    textColor?: string;
    rounded?: string;
    padding?: string;
    size?: Sizes;
    tip: string;
};

function variantClassNames(
    variant: ToolTipProps['variant'],
    marginAmount: ToolTipProps['marginAmount']
) {
    switch (variant) {
        case 'top':
            return `${marginAmount || '-my-10'}`;
        case 'bottom':
            return `${marginAmount || `mt-16`}`;
        case 'left':
            return `${marginAmount || '-ml-24'}`
        case 'right':
            return `${marginAmount || 'mx-24'}`
        default:
            return `mt-${marginAmount || `mt-16`}`;
    }
};
export default function ToolTip({
    tip,
    size,
    padding,
    rounded,
    children,
    textColor,
    background,
    marginAmount,
    variant = 'bottom'
}: ToolTipProps): JSX.Element | null {
    const [hover, setHover] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => { setIsMounted(false); setHover(false); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const classNames = `absolute ${size ? fontSizes(size) :
        `text-small`} ${rounded || 'rounded-lg'} ${padding || 'px-2 pb-1'} ${textColor ? textColor :
            'text-white'} ${background || 'bg-black'} ${variantClassNames(variant, marginAmount)}`;
    if (!isMounted) return null;

    return (
        <div className={`static flex ${variant === 'top' || variant === 'bottom' ? `flex-col`
            : 'flex-row'} items-center`}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
            {hover === true ? <span className={classNames}> {tip} </span> : null}
        </div>
    );
};