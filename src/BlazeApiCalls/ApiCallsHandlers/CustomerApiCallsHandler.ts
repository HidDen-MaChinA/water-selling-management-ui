import { AxiosBlazeApi } from "../BlazeApiBase";
import type { UserSchema } from "../Schemas/UserSchema";

export class CustomerApiCallsHandler extends AxiosBlazeApi {
    constructor(){
        super("/api/customers")
    }
}