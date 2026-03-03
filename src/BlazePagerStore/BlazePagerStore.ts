import { create } from "zustand";
import type { IBlazeApiBase } from "../BlazeApiCalls/BlazeApiBase";


type BlazePagerStoreType <T>= {
    pages: T[][]
    loadPage: (page: number,args?: {[args: string]: string})=>void
    getPage: (page: number)=>T[] | undefined
}

export function createBlazePageStore<T>(apiCallHandler: IBlazeApiBase, ressourcePath: string){
    return create<BlazePagerStoreType<T>>((set,get)=>({
    pages:[],
    loadPage: (page: number,args)=>{
        if(page<1){
            return;
        }
        const pageLoaded = checkIfPageIsLoaded({
            pages:get().pages,
            page: page
        })
        if(pageLoaded){
            return;
        }
        apiCallHandler.get<T[]>(ressourcePath, {page: page.toString(), ...args}).then((customers)=>{
            set((state)=>{
                const newPages= [...state.pages]
                newPages[page] = customers
                return {pages: newPages};
            })
        })        
    },
    getPage: (page: number)=>{
        if(page<1){
            return ;
        }
        return get().pages[page];
    }

}))

}

function checkIfPageIsLoaded(arg: {pages: unknown[][], page: number}){
    return arg.pages[arg.page] && true;
}
