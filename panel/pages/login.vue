<template>
  <div>
    <div class="rounded-md border border-gray-200 bg-white p-4">
      <div class="flex w-[300px] flex-col items-center gap-y-2">
        <TypoHeadingH3>ClouDocker</TypoHeadingH3>
        <AppImage :src="useRuntimeConfig().public.logo" width="75px" />
        <AppInputText v-model="form.email" variant="purple" label="Email Address" icon="ic:outline-email" placeholder="example@mail.com" />
        <AppInputPassword v-model="form.password" variant="blue-500" label="Password" icon="ic:baseline-password" placeholder="**********" />
        <AppButton variant="blue" :loading="isLoading" loading-color="blue" :disabled="false" @at-click="login">Sing In</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    layout: "center",
  });
</script>

<script lang="ts">
  export default {
    data() {
      return {
        isLoading: false,
        form: {
          email: "admin@mail.com",
          password: "admin",
        },
      };
    },
    methods: {
      async login() {
        this.isLoading = true;
        await useAuthStore().login(this.form);
        this.isLoading = false;
      },
    },
  };
</script>
