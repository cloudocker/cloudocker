<template>
  <div class="flex w-full flex-col items-start">
    <label v-if="label" class="mb-[2px] pl-[2px] text-sm text-gray-600">{{ label }}</label>
    <div class="relative w-full">
      <input
        v-model="value"
        type="text"
        class="w-full rounded-lg border border-gray-200 duration-100"
        :class="[getInputVariant(variant as ColorType), {'pl-10': icon}]"
        :placeholder="placeholder" />
      <div v-if="icon" class="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
        <Icon :icon="icon" :width="iconWidth" :height="iconHeight" />
      </div>
    </div>
    <div class="flex"></div>
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      modelValue: {
        type: String,
        default: "",
      },
      variant: {
        type: String,
        default: "blue",
      },
      label: {
        type: String,
        default: "",
      },
      placeholder: {
        type: String,
        default: "",
      },
      icon: {
        type: String,
        default: "",
      },
      iconWidth: {
        type: String,
        default: "",
      },
      iconHeight: {
        type: String,
        default: "",
      },
    },
    emits: ["update:modelValue"],
    computed: {
      value: {
        get() {
          return this.modelValue;
        },
        set(value: String) {
          this.$emit("update:modelValue", value);
        },
      },
    },
  };
</script>
