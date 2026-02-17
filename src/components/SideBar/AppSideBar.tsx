import { useLocation } from "react-router";
import type { SideBarType } from "../../BlazeSideBar/SideBarType";
import { Text } from "../../BlazeTypography/Text";

export const AppSideBar: SideBarType = (props) => {
  const { LogoComponent, SideBarLinkComponent, sideBarLinksObjects } = props;
  const location = useLocation();
  return (
    <div className=" flex flex-col justify-between w-[150px] border-r border-r-blue-100 shadow-xl">
      <div className="w-full pt-3 flex justify-center">
        {LogoComponent && <LogoComponent />}
      </div>
      <div className="flex flex-col mt-5 flex-1">
        {sideBarLinksObjects?.map((sideBarLinkObject, index) =>
          SideBarLinkComponent ? (
            <SideBarLinkComponent key={"app-sidebar-link-"+index} selected={sideBarLinkObject.path === location.pathname} href={sideBarLinkObject.path}>
              {sideBarLinkObject.label}
            </SideBarLinkComponent>
          ) : (
            <a href={sideBarLinkObject.path}>{sideBarLinkObject.label}</a>
          )
        )}
      </div>
      <div className="p-2">
          <a href="/profile" className="block border py-2 px-3 border-gray-500 rounded-xl shadow-md">
            <div className="w-full h-full flex gap-3">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                    <img height={30} width={30} src="/icons/profile.png" alt="" />
                </div>
                <Text>Profile</Text>
            </div>
          </a>
      </div>
    </div>
  );
};