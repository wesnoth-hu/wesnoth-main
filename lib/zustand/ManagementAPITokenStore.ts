import { use } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ManagementAPITokenStore {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
  getToken: () => string;
}

const useManagementAPITokenStore = create<ManagementAPITokenStore>()(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: "" }),
      getToken: () => get().token,
    }),
    {
      name: "ManagementAPITokenStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useManagementAPITokenStore;
