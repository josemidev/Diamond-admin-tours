import create from "zustand";
import { persist } from "zustand/middleware";

type authorizationState = {
  access_token: string;
  addAccesToken: (id: string) => void;
  removeAccesToken: () => void;
};

  const useAuthorizationState  = create(
  persist<authorizationState>((set) => ({
    access_token: '',
    addAccesToken: (id: string) =>
      set(() => ({ access_token:  id })),
    removeAccesToken:() => set({ access_token: '' })
  }), {
    name: "authorization",
  })
);

export { useAuthorizationState };
// Compare this snippet from src/store/authorization.ts: