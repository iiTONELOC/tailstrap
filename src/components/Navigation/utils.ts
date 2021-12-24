import { BarProps } from "./Bar";
import { overrideClassNames } from "../../utils";
import { getEl } from "../../utils";

export function checkWindowWidth(): number | undefined {
    if (typeof window !== 'undefined') {
        return window.innerWidth;
    } else {
        return undefined;
    };
};

export function checkMobile(userDefinedWidth?: number): boolean {
    const windowWidth = checkWindowWidth();
    const mobileStartInPixels = userDefinedWidth || 768
    if (windowWidth && windowWidth < mobileStartInPixels) {
        return true;
    } else {
        return false;
    };
};

export function handleResponsiveNav(
    remove: boolean,
    defaultClasses: string,
    navID: number,
): string | undefined {
    if (typeof window !== 'undefined') {
        const isMobile = checkMobile();
        const navEl = getEl(`__tailStrap_navBar-${navID}`);
        if (isMobile) {
            if (navEl && remove === false) {
                const { classList } = navEl;
                classList.forEach(token => {
                    if (token.includes('justify-') && token !== 'justify-between') {
                        navEl.classList.remove(token);
                        navEl.classList.add('justify-between');
                    }
                });
            } else if (navEl && remove) {
                if (navEl.className.trim() !== defaultClasses.trim()) {
                    return navEl.className = defaultClasses.trim();
                }
            };
        } else if (!isMobile && navEl && defaultClasses) {
            return navEl.className = defaultClasses;
        };
    } else {
        return;
    };
};

export interface mobileClassNameProps {
    show: boolean,
    navID: number,
    defaultClasses: string,
    userArgs: string,
    override: boolean,
};

export function handleMobileClassNames({
    show, navID, defaultClasses, userArgs, override
}: mobileClassNameProps): void {
    // @ts-ignore
    handleResponsiveNav(show, overrideClassNames({
        nativeArgs: defaultClasses,
        userArgs: userArgs,
        override
    }), navID);
};

export function handleVariant(variant: BarProps['variant']): string {
    switch (variant) {
        case 'left':
            return 'justify-start';
        case 'right':
            return 'justify-end';
        case 'center':
            return 'justify-center';
        default:
            return 'justify-start';
    };
};