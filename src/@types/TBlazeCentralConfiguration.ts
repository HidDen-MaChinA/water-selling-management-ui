import type { BlazeMiddleware } from "../BlazeAuthentification/BlazeAuthentificationLayer"
import type { TBlazeAuthentificationConfiguration } from "./TBlazeAuthentificationConfiguration"
import type { TBlazeFormsConfiguration } from "./TBlazeFormsConfiguration"
import type { TBlazeLayoutObjectConfiguration } from "./TBlazeLayoutConfiguration"

export type TBlazeCentralConfiguration= {
    blazeLayout: TBlazeLayoutObjectConfiguration
    blazeForms?: TBlazeFormsConfiguration
    blazeAuthProvider: TBlazeAuthentificationConfiguration
    blazeDefaultsMiddleware?: BlazeMiddleware[]
}