<template>
  <div class="block min-h-screen w-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600">
    <AppDefaultHeader />
    <UContainer>
      <div class="my-4 rounded-md px-4 py-2">
        <slot />
      </div>
    </UContainer>
  </div>
</template>
