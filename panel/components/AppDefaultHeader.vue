<template>
  <div class="fixed left-0 right-0 top-0 z-10 bg-white bg-opacity-30 shadow-md backdrop-blur-md">
    <div class="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
      <div class="flex h-full items-center justify-between px-4">
        <div class="flex cursor-pointer select-none items-center gap-x-4" @click="navigateTo('/', {replace: true})">
          <img :src="useRuntimeConfig().public.logo" alt="logo" class="w-8 rounded-full" />
          <h2 class="text-xl font-bold">{{ useRuntimeConfig().public.appName }}</h2>
        </div>
        <!-- <UDropdown :items="items" :ui="{item: {disabled: 'cursor-text select-text'}}" :popper="{placement: 'bottom-start'}">
          <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />

          <template #account="{item}">
            <div class="text-left">
              <p>Signed in as</p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
            </div>
          </template>

          <template #item="{item}">
            <span class="truncate">{{ item.label }}</span>
            <UIcon :name="item.icon" class="ms-auto h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500" />
          </template>
        </UDropdown> -->
        <button @click="useAuthStore().logout()">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // const items = [
  //   [
  //     {
  //       label: useAuthStore().email,
  //       slot: "account",
  //       disabled: true,
  //     },
  //   ],
  //   [
  //     {
  //       label: "Sign out",
  //       icon: "i-heroicons-arrow-left-on-rectangle",
  //       click: async () => {
  //         await useAuthStore().logout();
  //       },
  //     },
  //   ],
  // ];
</script>
