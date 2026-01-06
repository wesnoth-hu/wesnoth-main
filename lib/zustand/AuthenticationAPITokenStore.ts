import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthenticationAPITokenStore {
  token: string;
  setToken: (token: string) => void;
  clearToken: () => void;
  getToken: () => string;
}

const useAuthenticationAPITokenStore = create<AuthenticationAPITokenStore>()(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: "" }),
      getToken: () => get().token,
    }),
    {
      name: "AuthenticationAPITokenStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthenticationAPITokenStore;
