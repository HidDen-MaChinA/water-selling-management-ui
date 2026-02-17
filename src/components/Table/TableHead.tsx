import type { BlazeBaseTHeadType } from "../../BlazeTables/BlazeBaseTheadType";

export const TableHead: BlazeBaseTHeadType = (props)=>{
    return <thead {...{...props, className: "[&>th]:px-3 [&>th]:py-3 border-b border-b-gray-300"}} />
}