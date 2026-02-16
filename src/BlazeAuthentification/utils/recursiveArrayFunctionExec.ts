import type { BlazeMiddleware } from "../BlazeAuthentificationLayer";

export function recursiveArrayFunctionExec<T>(refArr: BlazeMiddleware<T>[],arg:T|null,index: number){
    if(refArr.length === index ){
        return arg;
    }
    return recursiveArrayFunctionExec(refArr,refArr[index](arg),index+1)

}