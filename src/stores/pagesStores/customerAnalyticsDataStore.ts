import { CustomerAnalyticsDataApiCallsHandler } from "../../BlazeApiCalls/ApiCallsHandlers/CustomerAnalyticsDataApiCallsHandler";
import { createBlazePageStore } from "../../BlazePagerStore/BlazePagerStore";

const customerAnalyticsDataCallsHandler = new CustomerAnalyticsDataApiCallsHandler();

export const useCustomerAnalyticsDataStore = createBlazePageStore(customerAnalyticsDataCallsHandler);
