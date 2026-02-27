import type { Customer } from "../@types/AppTypes/Customer";
import { CustomerApiCallsHandler } from "../BlazeApiCalls/ApiCallsHandlers/CustomerApiCallsHandler";
import { createBlazePageStore } from "../BlazePagerStore/BlazePagerStore";

const customersCallHandler = new CustomerApiCallsHandler();
export const useCustomersStore = createBlazePageStore<Customer>(customersCallHandler, "/getall")
