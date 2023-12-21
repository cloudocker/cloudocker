<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div class="flex w-96 flex-col gap-y-4 rounded-md bg-white p-5 py-10 shadow-md">
      <div class="flex items-center justify-center">
        <img :src="useRuntimeConfig().public.logo" alt="logo" class="w-16" />
        <h2 class="text-3xl font-bold">{{ useRuntimeConfig().public.appName }}</h2>
      </div>
      <div class="flex w-full flex-col gap-y-4 rounded-md p-4">
        <UFormGroup label="Email" required>
          <UInput v-model="form.email" type="email" icon="i-heroicons-envelope" placeholder="you@example.com" />
        </UFormGroup>
        <UFormGroup label="Password" required>
          <UInput v-model="form.password" type="password" icon="i-heroicons-key" placeholder="********" />
        </UFormGroup>
        <UCheckbox name="remember-me" label="Remember me" />
        <UButton block @click="login">Sign In</UButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import axios from "axios";

  definePageMeta({
    layout: "center",
  });
</script>

<script lang="ts">
  export default {
    data() {
      return {
        form: {
          email: "admin@mail.com",
          password: "admin",
        },
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("/api/auth/login", this.form);
          if (!response.data.access_token) throw new Error("Invalid response");
          useToast().add({
            title: "Login",
            description: "Login success",
            timeout: 1500,
          });
          return navigateTo("/");
        } catch (error: any) {
          useToast().add({
            title: "Login",
            description: error.response?.data.message || error.message,
            color: "red",
          });
        }
      },
    },
  };
</script>
