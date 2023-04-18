<template>
  <div>
    <div class="flex items-center content-center">
      <img class="h-16 w-16 object-contain mr-1" :src="tool.logo" alt="Logo" />
      <div>
        <h1 class="text-lg font-medium">{{ tool.title }}</h1>
        <span
          v-for="(tag, index) in tool.tags"
          :key="index"
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <h2 class="text-sm text-gray-400 truncate pt-2">{{ tool.subtitle }}</h2>

    <p v-html="tool.description" class="mt-6"></p>
    <img
      v-if="tool.image"
      class="object-contain mt-4 max-w-lg sm:max-w-3xl"
      :src="tool.image"
      alt="Image"
    />
    <div class="mt-4">
      <a
        :href="tool.link"
        class="underline decoration-2 underline-offset-2"
        target="_blank"
      >
        {{ tool.link }}
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import toolsData from "~/data/tools";

const route = useRoute();
const id = ref(route.params.id);

const tool = ref(toolsData[id.value - 1]);
</script>
