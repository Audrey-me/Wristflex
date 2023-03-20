import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import axios from "axios";

export const useAuthStore = create(
  devtools(
    immer((set) => ({
      isLoggedIn: [],
      isLoading: false,
      user: [],
      error: null,
      login: async (email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/wristflex/login",
            { email, password }
          );
          if (response) {
            set({
              isLoggedIn: true,
              error: null,
              isLoading: true,
              user: response.data,
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            const { error } = await response.json();
            set({ error });
          }
        } catch (error) {
          set({ isLoggedIn: false, error });
        }
      },

      signup: async (firstname, lastname, email, password) => {
        try {
          const response = await axios.post(
            "http://localhost:5000/api/wristflex/",
            { firstname, lastname, email, password }
          );
          if (response) {
            // const[isloggedin, setisloggedin]
            set({
              isLoggedIn: true,
              user: response.data,
              isLoading: true,
              error: null,
            });
            localStorage.setItem("user", JSON.stringify(response.data));
          } else {
            const { error } = await response.json();
            set({ error });
          }
        } catch (error) {
          set({ isLoggedIn: false, error: error.message });
        }
      },
      logout: () => {
        set({ user: null, isLoading: false, isLoggedIn: false });
        localStorage.removeItem("user");
      },
    }))
  )
);
