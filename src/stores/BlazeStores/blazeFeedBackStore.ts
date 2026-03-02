import { create } from "zustand";

export enum BlazeFeedBackMessageEnum {
  INFO,
  ERROR,
  WARNING,
  SUCCESS,
}

export type BlazeFeedBackMessageType = {
  message: string;
  messageType: BlazeFeedBackMessageEnum;
};

export type BlazeFeedBackStoreType = {
  feedBacksMessageMap?: Map<string, BlazeFeedBackMessageType[]>;
  addFeedBackMap: (name: string) => void;
  dispatchMessageToFeedBackMap: (
    name: string,
    newFeedBackMessage: BlazeFeedBackMessageType
  ) => void;
};

export const useBlazeFeedBackStore = create<BlazeFeedBackStoreType>((set) => ({
  feedBacksMessageMap: new Map<string, BlazeFeedBackMessageType[]>(),
  addFeedBackMap: (name) => {
    set((state) => {
      if (!state.feedBacksMessageMap) {
        return state;
      }
      const hasFeedBacksMessage = state.feedBacksMessageMap.get(name);
      if (hasFeedBacksMessage) {
        return state;
      }
      state.feedBacksMessageMap.set(name, []);
      return { feedBacksMessageMap: new Map(state.feedBacksMessageMap) };
    });
  },
  dispatchMessageToFeedBackMap: (
    name,
    newFeedBackMessage: BlazeFeedBackMessageType
  ) => {
    set((state) => {
      if (!state.feedBacksMessageMap) {
        return state;
      }
      const feedBacksMessage = state.feedBacksMessageMap.get(name);
      if (feedBacksMessage) {
        // feedBacksMessage.push(newFeedBackMessage)
        // state.feedBacksMessageMap.set(name, feedBacksMessage);
        state.feedBacksMessageMap.set(name, [newFeedBackMessage]);
        return { feedBacksMessageMap: new Map(state.feedBacksMessageMap) };
      }
      return state;
    });
  },
}));
