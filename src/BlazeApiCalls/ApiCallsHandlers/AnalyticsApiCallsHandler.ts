import { AxiosBlazeApi } from "../BlazeApiBase";

export class AnalyticsApiCallsHandler extends AxiosBlazeApi {
    constructor(){
        super("/api/analytics")
    }
}