import {defineStore, acceptHMRUpdate} from "pinia";
type statusTypes = "success" | "error" | "warning";

export interface toastDataType {
  id: string;
  status: statusTypes;
  message: string;
}

export const useToastStore = defineStore("toast", {
  state: () => ({
    data: [] as toastDataType[],
  }),
  getters: {
    toastData: (state) => state.data,
  },
  actions: {
    send(status: statusTypes, message: string, timeout: number = 5000) {
      const id = generateRandomId(6);
      this.data.push({
        id: id,
        status: status,
        message: message,
      });
      setTimeout(() => {
        this.data.shift();
      }, timeout);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToastStore, import.meta.hot));
}

export const sendToast = (status: statusTypes, message: string, timeout: number = 5000) => {
  useToastStore().send(status, message, timeout);
};
