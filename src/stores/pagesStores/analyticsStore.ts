import type { Analytic } from "../../@types/AppTypes/Analytic";
import type { CustomerAnalyticsData } from "../../@types/AppTypes/CustomerAnalyticsData";
import { AnalyticsApiCallsHandler } from "../../BlazeApiCalls/ApiCallsHandlers/AnalyticsApiCallsHandler";
import { createBlazePageStore } from "../../BlazePagerStore/BlazePagerStore";

const customerAnalyticsDataCallsHandler = new AnalyticsApiCallsHandler();

export const useCustomerAnalyticsDataStore = createBlazePageStore<Analytic>(customerAnalyticsDataCallsHandler, "/getall");
