<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div class="flex w-96 flex-col gap-y-4 rounded-md bg-white p-5 py-10 shadow-md">
      <div class="flex items-center justify-center">
        <img :src="useRuntimeConfig().public.logo" alt="logo" class="w-16" />
        <h2 class="text-3xl font-bold">{{ useRuntimeConfig().public.appName }}</h2>
      </div>
      <div class="flex w-full flex-col gap-y-4 rounded-md p-4">
        <form @submit.prevent="signIn({username, password})">
          <UFormGroup label="Email" required>
            <UInput v-model="username" type="email" icon="i-heroicons-envelope" placeholder="you@example.com" />
          </UFormGroup>
          <UFormGroup label="Password" required>
            <UInput v-model="password" type="password" icon="i-heroicons-key" placeholder="********" />
          </UFormGroup>
          <UCheckbox name="remember-me" label="Remember me" />
          <UButton block type="submit">Sign In</UButton>
        </form>
      </div>
      <pre>Status: {{ status }}</pre>
      <pre>Data: {{ data || "no session data present, are you logged in?" }}</pre>
      <pre>Last refreshed at: {{ lastRefreshedAt || "no refresh happened" }}</pre>
      <pre>JWT token: {{ token || "no token present, are you logged in?" }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import {definePageMeta, useAuth} from "#imports";

  const {signIn, token, data, status, lastRefreshedAt} = useAuth();

  const username = ref("");
  const password = ref("");

  definePageMeta({
    layout: "center",
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: "/",
    },
  });
</script>
