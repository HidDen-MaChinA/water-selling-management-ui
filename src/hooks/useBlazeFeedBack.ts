import { useEffect, useState } from "react";
import { useBlazeFeedBackStore, type BlazeFeedBackMessageType } from "../stores/BlazeStores/blazeFeedBackStore";

export function useBlazeFeedBack(
  name: string
): [
  BlazeFeedBackMessageType[] | undefined,
  (name: string, newFeedBackMessage: BlazeFeedBackMessageType) => void
] {
  const { feedBacksMessageMap, dispatchMessageToFeedBackMap } =
    useBlazeFeedBackStore();
  const [toReturn, setToReturn] = useState<BlazeFeedBackMessageType[]>();
  useEffect(() => {
    if (feedBacksMessageMap) {
      const feedBackMessage = feedBacksMessageMap.get(name);
      if (feedBackMessage) {
        setToReturn(feedBackMessage);
      }
    }
  }, [feedBacksMessageMap]);
  return [toReturn, dispatchMessageToFeedBackMap];
}