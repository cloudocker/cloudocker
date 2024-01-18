<template>
  <div class="block min-h-screen w-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-gray-900 to-gray-600">
    <AppDefaultHeader />
    <AppContainer>
      <div class="rounded-md px-4 py-2 pt-16">
        <slot />
      </div>
    </AppContainer>
  </div>
</template>
