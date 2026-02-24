import type { FieldValues } from "react-hook-form";
import { CustomerApiCallsHandler } from "../../BlazeApiCalls/ApiCallsHandlers/CustomerApiCallsHandler";
import { BlazeBaseDynamicForm } from "../../BlazeForm/BlazeBaseDynamicForm";
import { DynamiqueInputType } from "../../BlazeForm/DynamiqueInputBase";
import { AppButton } from "../../components/Button/AppButton";

const customerApiCallsHandler = new CustomerApiCallsHandler("/api/customers")

export default function ManageCustomersPage(){
    const onSubmit = (data: FieldValues)=>{
        customerApiCallsHandler.post(data, "/create").then(()=>{
            console.log('customer created')
        })
    }
    return (
      <div>
        <BlazeBaseDynamicForm
            onSubmit={onSubmit}
          formStructure={[{ label: "name", type: DynamiqueInputType._text }]}
          customButton={{
            Component: AppButton,
            text: "Create Customer",
          }}
        />
      </div>
    );
}