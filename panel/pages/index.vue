<template>
  <div class="flex flex-col gap-y-3">
    <!-- Header -->
    <div class="flex justify-between">
      <span class="text-lg font-semibold text-gray-700">Projects</span>
      <UButton icon="i-heroicons-plus" size="sm" color="gray" variant="solid" label="Add Project" :trailing="false" />
    </div>
    <!-- Project List -->
    <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard> Hello world </ProjectCard>
      <ProjectCard> Hello world </ProjectCard>
      <ProjectCard> Hello world </ProjectCard>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
