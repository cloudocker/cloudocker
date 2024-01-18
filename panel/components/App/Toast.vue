<template>
  <div class="fixed end-2 top-0 z-[99999]">
    <TransitionGroup name="toast">
      <template v-for="data in useToastStore().toastData" :key="data.id">
        <div class="my-2 max-w-xs rounded-xl border border-gray-200 bg-white shadow-lg" role="alert">
          <div class="flex p-4">
            <div class="flex-shrink-0">
              <Icon :icon="getStatusIcon(data.status)" width="18" :class="getStatusClassColor(data.status)" />
            </div>
            <div class="ms-3">
              <p class="text-sm text-gray-700">{{ data.message }}</p>
            </div>
          </div>
        </div>
      </template>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
  export default {
    methods: {
      getStatusIcon(status: string) {
        return (
          {
            info: "ep:info-filled",
            error: "carbon:close-filled",
            success: "icon-park-solid:check-one",
            warning: "material-symbols:info",
          }[status] || "ep:info-filled"
        );
      },
      getStatusClassColor(status: string) {
        return (
          {
            info: "text-blue-500",
            error: "text-red-500",
            success: "text-green-500",
            warning: "text-yellow-500",
          }[status] || "text-blue-500"
        );
      },
    },
  };
</script>

<style>
  /* Enter Transition */
  .toast-enter-active {
    transition:
      opacity 200ms ease-in,
      transform 200ms ease-in;
  }
  .toast-enter-from {
    opacity: 0;
    transform: translateY(8px);
  }
  .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  /* Leave Transition */
  .toast-leave-active {
    transition:
      opacity 500ms ease-out,
      transform 500ms ease-out;
  }
  .toast-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  .toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
</style>
