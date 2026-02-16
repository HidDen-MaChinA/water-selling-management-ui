import type { TBlazeCentralConfiguration } from "./@types/TBlazeCentralConfiguration";
import { BlazeBaseAuthentificationProvider } from "./BlazeAuthentification/BlazeAuthentificationProvider";

const blazeCentralConfiguration : TBlazeCentralConfiguration = {
    blazeLayout: {
        sideBarLinksObjects: [
            {label: "Forms", path: "/forms"},
            {label: "Customers", path: "/customers"},
        ]
    },
    // T type argument is the return type of whoami function that give type to all the middleware argument
    blazeAuthProvider: {
        authentificationPath: "/api/auth/whoami",
        authentificationProvider: new BlazeBaseAuthentificationProvider<unknown>
    }
}

export default blazeCentralConfiguration;