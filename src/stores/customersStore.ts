import { create } from "zustand";
import type { Customer } from "../@types/AppTypes/Customer";
import { CustomerApiCallsHandler } from "../BlazeApiCalls/ApiCallsHandlers/CustomerApiCallsHandler";

const customersCallHandler = new CustomerApiCallsHandler("/api/customers");

type CustomersStoreType = {
    customersPage: Customer[][]
    loadPage: (page: number)=>void
    getPage: (page: number)=>Customer[] | undefined
}

function checkIfPageIsLoaded(arg: {customersPage: Customer[][], page: number}){
    return arg.customersPage[arg.page] && true;
}

export const useCustomersStore = create<CustomersStoreType>((set,get)=>({
    customersPage:[],
    loadPage: (page: number)=>{
        if(page<1){
            return;
        }
        const pageLoaded = checkIfPageIsLoaded({
            customersPage:get().customersPage,
            page: page
        })
        if(pageLoaded){
            return;
        }
        customersCallHandler.get<Customer[]>("/getall", {page: page.toString()}).then((customers)=>{
            set((state)=>{
                const newCustomersPage = [...state.customersPage]
                newCustomersPage[page] = customers
                return {customersPage: newCustomersPage};
            })
        })        
    },
    getPage: (page: number)=>{
        if(page<1){
            return ;
        }
        return get().customersPage[page];
    }

}))