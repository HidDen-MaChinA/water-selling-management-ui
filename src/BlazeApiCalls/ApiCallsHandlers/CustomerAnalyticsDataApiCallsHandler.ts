import { AxiosBlazeApi } from "../BlazeApiBase";

export class CustomerAnalyticsDataApiCallsHandler extends AxiosBlazeApi {
    constructor(){
        super("/api/analytics")
    }
}