<template>
  <div
    class="block min-h-screen w-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-cyan-200 via-blue-200 to-violet-100">
    <AppDefaultHeader />
    <UContainer>
      <div class="my-4 rounded-md px-4 py-2">
        <slot />
      </div>
    </UContainer>
  </div>
</template>
