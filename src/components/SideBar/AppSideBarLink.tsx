import type { SideBarLinkType } from "../../BlazeSideBar/SideBarLinkType";

export const AppSideBarLink : SideBarLinkType = (props)=>{
    return (
        <a {...{...props, className: `${props.selected ? "bg-blue-700 text-white":"text-gray-800 hover:text-white hover:bg-blue-600"} duration-[200ms] block py-2 px-3`}} />
    )
}