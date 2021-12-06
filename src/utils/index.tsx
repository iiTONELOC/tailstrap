
interface classData {
    nativeArgs?: string;
    userArgs?: string;
    override?: boolean;
};

export function createClasses(classData: classData) {
let userArgs = classData.userArgs;
if (userArgs === undefined) userArgs = '';
if (classData.override === undefined){
return  classData.nativeArgs + ' ' + userArgs ;
}else{
    if(userArgs !== ''){
        return userArgs;
    }else{
        return classData.nativeArgs;
    };
};
};