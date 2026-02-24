import { AxiosBlazeApi } from "../BlazeApiBase";

export class QueuesApiCallsHandler extends AxiosBlazeApi{
    constructor(){
        super("/api/queues")
    }
};