<template>
  <div>
    <div class="flex items-center content-center">
      <h1 class="text-lg font-medium mr-2">{{ project.title }}</h1>
      <span
        v-for="(tag, index) in project.tags"
        :key="index"
        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
      >
        {{ tag }}
      </span>
    </div>
    <h2 class="text-sm text-gray-400 truncate pt-2">{{ project.subtitle }}</h2>

    <p v-html="project.description" class="mt-6"></p>
    <img
      v-if="project.image"
      class="object-contain mt-4 max-w-lg sm:max-w-3xl"
      :src="project.image"
      alt="Image"
    />
    <div class="mt-4">
      <a :href="project.link" class="underline decoration-2 underline-offset-2" target="_blank">
        {{ project.link }}
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import projectsData from "~/data/projects";

const route = useRoute();
const id = ref(route.params.id);

const project = ref(projectsData[id.value - 1]);
</script>
