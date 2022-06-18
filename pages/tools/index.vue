<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="tool in tools"
      :key="tool.id"
      class="relative border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-red-500"
    >
      <div class="flex-shrink-0">
        <img class="h-16 w-16 object-contain" :src="tool.logo" alt="Logo" />
      </div>
      <div class="flex-1 min-w-0">
        <NuxtLink :to="'/tools/' + tool.id">
          <span class="absolute inset-0" aria-hidden="true" />
          <h1
            class="text-sm font-medium underline decoration-2 underline-offset-2"
          >
            {{ tool.title }}
          </h1>
          <h2 class="text-sm text-gray-400 truncate pt-2">
            {{ tool.subtitle }}
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import toolsData from "~/data/tools";

const tools = ref(toolsData);
</script>
