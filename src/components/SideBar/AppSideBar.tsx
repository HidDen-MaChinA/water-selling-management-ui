import { useLocation } from "react-router";
import type { SideBarType } from "../../BlazeSideBar/SideBarType";

export const AppSideBar: SideBarType = (props) => {
  const { LogoComponent, SideBarLinkComponent, sideBarLinksObjects } = props;
  const location = useLocation();
  return (
    <div className="w-[150px] border-r border-r-blue-100 shadow-xl">
      <div className="w-full pt-3 flex justify-center">
        {LogoComponent && <LogoComponent />}
      </div>
      <div className="flex flex-col mt-5">
        {sideBarLinksObjects?.map((sideBarLinkObject) =>
          SideBarLinkComponent ? (
            <SideBarLinkComponent selected={sideBarLinkObject.path === location.pathname} href={sideBarLinkObject.path}>
              {sideBarLinkObject.label}
            </SideBarLinkComponent>
          ) : (
            <a href={sideBarLinkObject.path}>{sideBarLinkObject.label}</a>
          )
        )}
      </div>
    </div>
  );
};