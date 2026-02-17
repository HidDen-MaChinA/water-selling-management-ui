import type React from "react"
import type { SideBarLinkObject, SideBarType } from "../../BlazeSideBar/SideBarType"
import type { SideBarLinkType } from "../../BlazeSideBar/SideBarLinkType"

export type TBlazeLayoutObjectConfiguration = {
    Sidebar?: SideBarType
    SidebarLink?: SideBarLinkType
    LogoComponent?: ()=>React.ReactNode
    sideBarLinksObjects?: SideBarLinkObject[]
}
