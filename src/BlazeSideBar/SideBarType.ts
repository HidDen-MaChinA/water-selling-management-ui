import type React from "react"
import type { SideBarLinkType } from "./SideBarLinkType"

type SideBarPropsType = {
    SideBarLinkComponent?: SideBarLinkType
    sideBarLinksObjects?: SideBarLinkObject[]
    LogoComponent?: ()=>React.ReactNode
}

export type SideBarLinkObject = {
    label:string
    path: string
}

export type SideBarType = (props: SideBarPropsType)=>React.ReactNode