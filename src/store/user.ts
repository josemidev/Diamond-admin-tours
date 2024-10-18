import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  user: {
    name: string;
    higherRole: string;
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
        higherRole: "",
        username: "",
      },
      addCurrentUser: (userKey) => set({ user: userKey }),
      removeCurrentUser: () =>
        set({ user: { name: "", higherRole: "", username: "" } }),
    }),
    {
      name: "user_role",
    }
  )
);

export { useCurrentUser };
