<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="project in projects"
      :key="project.id"
      class="relative border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-gray-400"
    >
      <div class="flex-1 min-w-0">
        <NuxtLink :to="'/projects/' + project.id">
          <span class="absolute inset-0" aria-hidden="true" />
          <h1
            class="text-sm font-medium underline decoration-2 underline-offset-2"
          >
            {{ project.title }}
          </h1>
          <h2 class="text-sm text-gray-400 truncate pt-2">
            {{ project.subtitle }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import projectsData from "~/data/projects";

const projects = ref(projectsData);
</script>
