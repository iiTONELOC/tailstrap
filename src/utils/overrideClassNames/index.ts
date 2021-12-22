interface classData {
    nativeArgs?: string;
    userArgs?: string;
    override?: boolean;
};

export default function overrideClassNames(classData: classData) {
    let userArgs = classData.userArgs;
    if (userArgs === undefined) userArgs = '';
    if (classData.override === undefined || !classData.override) {
        return classData.nativeArgs + ' ' + userArgs;
    } else {
        if (userArgs !== '') {
            return userArgs;
        } else {
            return classData.nativeArgs;
        };
    };
};
