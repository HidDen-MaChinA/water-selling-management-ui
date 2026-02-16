import { create } from "zustand";

export type AuthStoreType = {
  userInformations: unknown | null;
  setUserInformations: (userInformation: unknown) => void;
};

export const useAuthStore = create<AuthStoreType>((set) => ({
  userInformations: null,
  setUserInformations: (userInformation) => {
    set(() => ({
      userInformations: userInformation,
    }));
  },
}));
