import { useEffect, useState } from "react"
import { BlazeBaseDynamicForm } from "../../BlazeForm/BlazeBaseDynamicForm"
import { DynamiqueInputType } from "../../BlazeForm/DynamiqueInputBase"
import { useCustomersStore } from "../../stores/customersStore"
import type { Customer } from "../../@types/AppTypes/Customer"
import { AppButton } from "../../components/Button/AppButton"
import type { FieldValues } from "react-hook-form"
import { QueuesApiCallsHandler } from "../../BlazeApiCalls/ApiCallsHandlers/QueuesApiCallsHandler"

const queuesApiCallHandler = new QueuesApiCallsHandler()

export default function ManageQueuePage(){
    const customersStore = useCustomersStore(_=>_)
    const [customers, setCustomers]= useState<Customer[]>([])
    const onSubmit = (values : FieldValues)=>{
       queuesApiCallHandler.post(values, "/create").then(()=>{
       }); 
    }
    useEffect(()=>{
        setCustomers(customersStore.getPage(1) || [])
    }, [customersStore])
    useEffect(()=>{
        customersStore.loadPage(1)
    }, [])
    return (
      <div>
        <BlazeBaseDynamicForm
        onSubmit={onSubmit}
          formStructure={[
            {
              label: "Bibon number",
              objectKey: "bidonNumber",
              type: DynamiqueInputType._number,
            },
            {
              type: DynamiqueInputType._select,
              label: "customer",
              objectKey: "customerId",
              values: customers.map((customer) =>({value: customer.id, valueIdentifier: customer.name})),
            },
          ]}
          customButton={{
            Component: AppButton,
            text: "Create Queue Position",
          }}
        />
      </div>
    );
}