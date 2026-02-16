import { baseClient } from "../BlazeApiCalls/BlazeApiBase";

export interface IBlazeAuthentificationProvider {
    whoami(authentificationPath: string): Promise<unknown | null>;
    logout(): null;
    login<K>(path:string, args:K):Promise<unknown | null>
}

export class BlazeBaseAuthentificationProvider <T> implements IBlazeAuthentificationProvider{
    logout(): null {
        return null
    }
    whoami(authPath: string): Promise<T | null> {
       return baseClient.get(parseAuthPath(authPath)).then((res)=>res.data as T).catch(_=>null)
    }
    login<K>(path: string, args:K):Promise<T | null>{
       return baseClient.post(parseAuthPath(path), args).then((res)=>res.data as T).catch(_=>null)
    }
}

function parseAuthPath(arg: string){
    return arg.charAt(0).match("/") ? arg : "/" + arg
}
