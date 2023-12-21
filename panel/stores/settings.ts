import {defineStore, acceptHMRUpdate} from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    isFirstLoad: true,
  }),
  getters: {},
  actions: {
    setFirstLoad: (isFirstLoad: boolean) => {
      useSettingsStore().$state.isFirstLoad = isFirstLoad;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot));
}
