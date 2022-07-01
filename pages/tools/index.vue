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
          <div>
            <h1
              class="text-sm font-medium"
            >
              {{ tool.title }}
            </h1>
            <span
                v-for="(tag, index) in tool.tags"
                :key="index"
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
              >
              {{ tag }}
            </span>
          </div>
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
