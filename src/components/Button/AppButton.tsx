import type { BlazeBaseButtonType } from "../../BlazeButtons/BlazeBaseButtonType";
import { BlazeBaseButton } from "../../BlazeButtons/BlazeButtons/BlazeBaseButton";

export const AppButton : BlazeBaseButtonType = (props) => {
    return (
        <BlazeBaseButton {...{...props, className:`${props.variant ? "bg-white border border-blue-600":"bg-blue-600 text-white"}` }} />
    )
}