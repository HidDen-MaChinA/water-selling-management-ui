import type { BlazeBaseTBodyType } from "../../BlazeTables/BlazeBaseTBodyType"

export const TableBody: BlazeBaseTBodyType= (props)=>{
    return <tbody {...{...props, className: "border-b border-b-gray-300"}} />
}