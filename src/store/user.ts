import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  user: {
    name: string;
    roles: string[];
    username: string;
  };
  addCurrentUser: (userKey: User | any) => void;
  removeCurrentUser: () => void;
};

const useCurrentUser = create(
  persist<User>(
    (set) => ({
      user: {
        name: "",
        roles: [],
        username: "",
      },
      addCurrentUser: (userKey: User | any) => set(() => ({ user: userKey })),
      removeCurrentUser: () =>
        set({ user: { name: "", roles: [], username: "" } }),
    }),
    {
      name: "user_role",
    }
  )
);

export { useCurrentUser };
