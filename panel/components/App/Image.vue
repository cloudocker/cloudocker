<template>
  <div
    :style="{
      width: width,
      height: height,
    }">
    <img :src="src" class="h-full w-full" :class="objectClass" />
  </div>
</template>

<script lang="ts">
  export default {
    props: {
      src: {
        type: String,
        default: "/img/placeholder.png",
      },
      width: {
        type: String,
        default: "100px",
      },
      height: {
        type: String,
        default: "auto",
      },
      objectClass: {
        type: String,
        default: "object-cover",
      },
    },
  };
</script>

<style></style>
