import type { BlazeFeedBackMessageEnum } from "../stores/BlazeStores/blazeFeedBackStore"

export type BlazeFeedBackInfoPropsType = {
    message?: string
    messageType?: BlazeFeedBackMessageEnum
}

export type BlazeFeedBackInfoType = (args: BlazeFeedBackInfoPropsType) => React.ReactNode