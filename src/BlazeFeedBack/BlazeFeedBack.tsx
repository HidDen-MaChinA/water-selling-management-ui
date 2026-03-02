import { useEffect, useState } from "react"
import type { BlazeFeedBackMessageType } from "../stores/BlazeStores/blazeFeedBackStore"
import { BlazeFeedBackInfo } from "./BlazeFeedBackProvider"
import type { BlazeFeedBackInfoPropsType, BlazeFeedBackInfoType } from "./BlazeFeedBackInfo"

export type BlazeFeedBackPropsType = {
    feedBacksMessageMap?: Map<string, BlazeFeedBackMessageType[]>
    children?: React.ReactNode
    FeedBackInfoComponent?: BlazeFeedBackInfoType
    name: string
}

export function BlazeFeedBack (props: BlazeFeedBackPropsType){
  const { children, feedBacksMessageMap,FeedBackInfoComponent , name } = props;
  const [messages, setMessages] = useState<BlazeFeedBackMessageType[]>([]);
  useEffect(()=>{
    if(feedBacksMessageMap) setMessages(feedBacksMessageMap.get(name) || []);
  }, [feedBacksMessageMap])
  return (
    <>
      <div className="h-full absolute flex flex-end p-3">
        <MapFeedBack FeedBackInfoComponent={FeedBackInfoComponent || BlazeFeedBackInfo} feedBacksMessages={messages} />
      </div>
      {children}
    </>
  );
}

function MapFeedBack(props: {
    feedBacksMessages: BlazeFeedBackMessageType[]
    FeedBackInfoComponent: BlazeFeedBackInfoType
}){
    const { FeedBackInfoComponent, feedBacksMessages} = props
   return (
    <div>
        {
            feedBacksMessages.map((each)=>(
                <FeedBackInfoComponent message={each.message} messageType={each.messageType} />
            ))
        }
    </div>
   ) 
}
