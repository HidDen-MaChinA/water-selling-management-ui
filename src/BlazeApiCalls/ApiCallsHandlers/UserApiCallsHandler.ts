import { AxiosBlazeApi } from "../BlazeApiBase";

export class UserApiCallsHandler extends AxiosBlazeApi {
    constructor(){
        super("/api/users")
    }
}