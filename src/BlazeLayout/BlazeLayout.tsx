import type React from "react";
import type { PageComponent } from "../@types/BlazeTypes/TBlazeRoutesConfiguration";
import type { SideBarLinkObject, SideBarType } from "../BlazeSideBar/SideBarType";
import type { SideBarLinkType } from "../BlazeSideBar/SideBarLinkType";
import { SideBar as BlazeSideBar } from "../BlazeSideBar/SideBar";

export type BlazeLayoutPropsType = {
  Component: PageComponent;
  Sidebar?: SideBarType;
  LogoComponent?: () => React.ReactNode;
  SideBarLink?: SideBarLinkType;
  sideBarLinksObjects?: SideBarLinkObject[]
};
export type BlazeLayoutType = (props: BlazeLayoutPropsType) => React.ReactNode;

export const BlazeLayout: BlazeLayoutType = (props) => {
  const { Component, Sidebar, LogoComponent, SideBarLink, sideBarLinksObjects } = props;
  return (
    <div className="flex flex-row h-[100vh] w-full">
      <>
        {Sidebar ? (
          <Sidebar
            sideBarLinksObjects={sideBarLinksObjects}
            LogoComponent={LogoComponent}
            SideBarLinkComponent={SideBarLink}
          />
        ) : (
          <BlazeSideBar
            LogoComponent={LogoComponent}
            SideBarLinkComponent={SideBarLink}
          />
        )}
      </>
      <div className="flex-1">
        <Component />
      </div>
    </div>
  );
};
