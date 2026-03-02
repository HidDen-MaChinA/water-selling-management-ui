import type React from "react";
import { BlazeFeedBackMessageEnum, useBlazeFeedBackStore, type BlazeFeedBackMessageType } from "../stores/BlazeStores/blazeFeedBackStore";
import { useEffect, useLayoutEffect, useState } from "react";
import { BlazeFeedBack } from "./BlazeFeedBack";
import type { BlazeFeedBackInfoType } from "./BlazeFeedBackInfo";

export type BlazeFeedBackProviderPropsType = {
    name: string
    children: React.ReactNode
}

export function BlazeFeedBackProvider (props: BlazeFeedBackProviderPropsType){
    const {name, children} = props;
    const {addFeedBackMap, feedBacksMessageMap} = useBlazeFeedBackStore(_=>_)
    useEffect(()=>{
        addFeedBackMap(name)
    }, [])
    useEffect(()=>{
        console.log("something")
    }, [feedBacksMessageMap])
    return <BlazeFeedBack FeedBackInfoComponent={BlazeFeedBackInfo} name={name} feedBacksMessageMap={feedBacksMessageMap}>{children}</BlazeFeedBack>;
}

export const BlazeFeedBackInfo : BlazeFeedBackInfoType =  (props)=>{
    const {message, messageType} = props;
    switch (messageType) {
      case BlazeFeedBackMessageEnum.INFO:
        return (
          <div className="w-[100px] p-3 rounded-xl shadow-md">{message}</div>
        );
      case BlazeFeedBackMessageEnum.ERROR:
      case BlazeFeedBackMessageEnum.SUCCESS:
      case BlazeFeedBackMessageEnum.WARNING:
    }
}


function FeedBackInfoTypeInfo(props: {message: string}){
    const {message} = props;
    return (
      <div className="w-[100px] p-3 rounded-xl shadow-md">{message}</div>
    );
}
