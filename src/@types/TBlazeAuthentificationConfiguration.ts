import type { IBlazeAuthentificationProvider } from "../BlazeAuthentification/BlazeAuthentificationProvider"

export type TBlazeAuthentificationConfiguration = {
    authentificationProvider : IBlazeAuthentificationProvider
    authentificationPath : string
}