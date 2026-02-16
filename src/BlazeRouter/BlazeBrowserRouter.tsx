import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import type { TBlazeRouteType } from "../@types/TBlazeRoutesConfiguration.ts";
import { BlazeAuthentificationLayer } from "../BlazeAuthentification/BlazeAuthentificationLayer.tsx";
import blazeCentralConfiguration from "../blazeCentralConfiguration.ts";
import BlazeObjectRoutes from "../blazeRouteConfiguration.ts";
import Loading from "../loading.tsx";

const SideBar = blazeCentralConfiguration.blazeLayout.Sidebar;
const SideBarLink = blazeCentralConfiguration.blazeLayout.SidebarLink;
const Logo = blazeCentralConfiguration.blazeLayout.LogoComponent;
const sideBarLinksObjects = blazeCentralConfiguration.blazeLayout.sideBarLinksObjects;

function mapObjectRouteToReactRouterRoute(arg: TBlazeRouteType) {
  if (arg.Layout) {
    return (
      <Route
        path={arg.path}
        element={
          <BlazeAuthentificationLayer middlewares={arg.middlewares} protection={arg.protection} Loading={Loading}>
            <arg.Layout
              sideBarLinksObjects={sideBarLinksObjects}
              LogoComponent={Logo}
              SideBarLink={SideBarLink}
              Component={arg.ComponentPage}
              Sidebar={SideBar}
            />
          </BlazeAuthentificationLayer>
        }
      />
    );
  }
  return (
    <Route
      path={arg.path}
      element={
        <BlazeAuthentificationLayer
          middlewares={arg.middlewares}
          Loading={Loading}
          protection={arg.protection}
        >
          <arg.ComponentPage />
        </BlazeAuthentificationLayer>
      }
    />
  );
}

const blazeRoutes = createRoutesFromElements(
  BlazeObjectRoutes.map(mapObjectRouteToReactRouterRoute)
);
export const BlazeBrowserRouter = createBrowserRouter(blazeRoutes);
