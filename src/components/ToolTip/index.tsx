import { useState, useEffect } from "react";
import { DefaultProps } from "../../types/defaultProps";


export interface ToolTipProps extends DefaultProps {
    variant?: 'top' | 'bottom' | 'left' | 'right';
    marginAmount?: string;
};

function variantClassNames(variant: ToolTipProps['variant'], marginAmount: ToolTipProps['marginAmount']) {
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
    children,
    marginAmount,
    variant = 'bottom'
}: ToolTipProps): JSX.Element | null {
    const [hover, setHover] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        return () => { setIsMounted(false); setHover(false); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if (!isMounted) return null;
    return (
        <span className={`static flex ${variant === 'top' || variant === 'bottom' ? `flex-col` : 'flex-row'} items-center`}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
            {
                hover === true ?
                    <span
                        className={`absolute text-sm text-center text-white bg-black rounded-lg p-1 ${variantClassNames(variant, marginAmount)}`}>
                        <p>Example Tip</p>
                    </span>
                    : null
            }
        </span>
    )
}