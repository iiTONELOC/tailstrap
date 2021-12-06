export function generateClassNames({ nativeArguments, userArguments }) {
    const classNames = nativeArguments?.split(' ');
    if (userArguments !== undefined && userArguments?.length > 0) {
        for (let i = 0; i < userArguments.length; i++) {
            const arg = userArguments[i];
            if (arg) {
                classNames.push(arg);
            }
        };
    }
    return classNames.join(' ');
};