<template>
  <button
    class="flex w-full items-center justify-center rounded-md px-3 py-2 font-semibold text-white duration-150 disabled:cursor-not-allowed disabled:bg-gray-300"
    :class="getButtonVariant(variant as ColorType)"
    :disabled="disabled || loading"
    @click="$emit('atClick')">
    <template v-if="loading">
      <div
        class="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent"
        :class="getTextColorVariant(loadingColor as ColorType)"
        role="status"
        aria-label="loading">
        <span class="sr-only">Loading...</span>
      </div>
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      variant: {
        type: String,
        default: "blue",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      loadingColor: {
        type: String,
        default: "white",
      },
    },
    emits: ["atClick"],
  };
</script>
