import axios from "axios";
import {defineStore, acceptHMRUpdate} from "pinia";

export const useAuthStore = defineStore("user", {
  state: () => ({
    email: "",
    name: "",
    iat: 0,
    exp: 0,
  }),
  getters: {
    isAuth: (state) => state.email !== "",
  },
  actions: {
    setUserData: (data: any) => {
      useAuthStore().$state = data;
    },
    login: async (credentials: {email: string; password: string}) => {
      try {
        const {data} = await axios.post("/api/auth/login", credentials);
        useAuthStore().setUserData(data);
        sendToast("success", "Login Success", 2000);
        return navigateTo("/", {replace: true, external: false});
      } catch (error: any) {
        sendToast("error", error.response?.data.message || error.message, 3000);
        return false;
      }
    },
    logout: async () => {
      try {
        await axios.post("/api/auth/logout");
        useAuthStore().setUserData({email: "", name: "", iat: 0, exp: 0});
        sendToast("success", "Logout Success", 2000);
        return navigateTo("/login", {replace: true, external: false});
      } catch (error: any) {
        sendToast("error", error.response?.data.message || error.message, 3000);
        return false;
      }
    },
    init: async () => {
      try {
        const {data} = await axios.get("/api/auth/user");
        useAuthStore().setUserData(data);
        useSettingsStore().setFirstLoad(false);
        return true;
      } catch (error) {
        return false;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
