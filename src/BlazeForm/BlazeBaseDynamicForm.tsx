import { useForm, type FieldValues, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form"
import { DynamiqueInputType, type DynamiqueInputBase } from "./DynamiqueInputBase";
import type { ICustomInputs } from "./ICustomInputs";
import { CustomInputs } from "./CustomInputs";
import type { BlazeBaseButtonType } from "../BlazeButtons/BlazeBaseButtonType";
import blazeCentralConfiguration from "../blazeCentralConfiguration";

export type DynamiqueListValueInputBase = {
  label:string
  type: DynamiqueInputType
  required?:boolean
  values?:string[] | number[]
}

type FormStructureType = DynamiqueInputBase & DynamiqueListValueInputBase

export type BlazeBaseDynamicFormPropsType = {
    formStructure: FormStructureType []
    customButton?: BlazeBaseDynamicFormCustomButton
    onSubmit?: SubmitHandler<FieldValues>
    onInvalid?: SubmitErrorHandler<FieldValues> 
}

export type BlazeBaseDynamicFormCustomButton = {
  Component: BlazeBaseButtonType
  text?: string
  variant?: boolean
}
const customInputs = blazeCentralConfiguration.blazeForms && blazeCentralConfiguration.blazeForms.customInputs

function formatFormStructureToUseFormInterface (formStructure: DynamiqueInputBase[]){
    let toReturn : {[args:string]: any} = {}
    for (let i= 0; i < formStructure.length; i++) {
       switch(formStructure[i].type){
        case DynamiqueInputType._text:
           toReturn[formStructure[i].label] = "";
           continue;
        case DynamiqueInputType._password:
           toReturn[formStructure[i].label] = "";
           continue;
        case DynamiqueInputType._number:
           toReturn[formStructure[i].label] = 0;
           continue;
        case DynamiqueInputType._file:
           toReturn[formStructure[i].label] = null;
           continue;
        case DynamiqueInputType._date:
           toReturn[formStructure[i].label] = null;
           continue;
        case DynamiqueInputType._select:
           toReturn[formStructure[i].label] = null;
           continue;
       }
    }
    return toReturn;
}

export function BlazeBaseDynamicForm(props: BlazeBaseDynamicFormPropsType){
    const {customButton,formStructure, onSubmit, onInvalid} = props;
    console.log(formatFormStructureToUseFormInterface(formStructure));
    const {register, handleSubmit} = useForm(formatFormStructureToUseFormInterface(formStructure));
    const functionRefObject : ICustomInputs = customInputs || new CustomInputs();
    /**
     * 0: text 
     * 1: number
     * 2: password
     * 3: file
     * ...
     * n: N function that return a react node
     * */ 
    const functionRefArray = [
      functionRefObject._text,
      functionRefObject._number,
      functionRefObject._password,
      functionRefObject._file,
      functionRefObject._date,
      functionRefObject._select
    ];
    const defaultSubmitHandler = ()=>{
        alert("no hanlder implemented")
    }
   return (
     <form onSubmit={handleSubmit(onSubmit || defaultSubmitHandler, onInvalid)}>
        <div>
         {formStructure &&
           formStructure.map((inputBase, index) => {
             if (functionRefArray[inputBase.type]) {
               return functionRefArray[inputBase.type]!(
                 register,
                 inputBase.label,
                 `dynamique-form-input-type-${inputBase.type}-index-${index}`,
                 inputBase.required,
                 inputBase.values
               );
             }
             return (
               <div key={`choice-no-defined${inputBase.label + index}`}>no custom component of type "{inputBase.type}" defined</div>
             );
           })}
        </div>
        <div className="pt-3">
         {customButton? (
           <customButton.Component variant={customButton.variant}>{customButton.text || "Submit"}</customButton.Component>
         ) : (
           <button>submit</button>
         )}
        </div>
     </form>
   ); 
}



