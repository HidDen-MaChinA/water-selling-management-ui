import type { TBlazeCentralConfiguration } from "./@types/BlazeTypes/TBlazeCentralConfiguration";
import { BlazeBaseAuthentificationProvider } from "./BlazeAuthentification/BlazeAuthentificationProvider";
import Logo from "./components/Layout/Logo";
import { AppSideBar } from "./components/SideBar/AppSideBar";
import { AppSideBarLink } from "./components/SideBar/AppSideBarLink";
import { TableBody } from "./components/Table/TableBody";
import { TableHead } from "./components/Table/TableHead";

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
        authentificationPath: "/whoami",
        authentificationProvider: new BlazeBaseAuthentificationProvider<unknown>("/api/auth")
    },
    blazeTables: {
        TBody: TableBody,
        Thead: TableHead
    }
}

export default blazeCentralConfiguration;