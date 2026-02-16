import type { TBlazeCentralConfiguration } from "./@types/TBlazeCentralConfiguration";
import { BlazeBaseAuthentificationProvider } from "./BlazeAuthentification/BlazeAuthentificationProvider";
import Logo from "./components/Layout/Logo";
import { AppSideBar } from "./components/SideBar/AppSideBar";
import { AppSideBarLink } from "./components/SideBar/AppSideBarLink";

const blazeCentralConfiguration : TBlazeCentralConfiguration = {
    blazeLayout: {
        sideBarLinksObjects: [
            {label: "Dashboard", path: "/dashboard"},
            {label: "Customers", path: "/customers"},
            {label: "Queue", path: "/queue"},
        ],
        Sidebar: AppSideBar,
        LogoComponent: Logo,
        SidebarLink: AppSideBarLink
    },
    // T type argument is the return type of whoami function that give type to all the middleware argument
    blazeAuthProvider: {
        authentificationPath: "/api/auth/whoami",
        authentificationProvider: new BlazeBaseAuthentificationProvider<unknown>
    }
}

export default blazeCentralConfiguration;