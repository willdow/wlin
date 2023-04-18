<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="(resource, index) in resources"
      :key="'resource' + index"
      class="relative border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-red-500"
    >
      <div class="flex-shrink-0">
        <img
          class="h-16 w-16 object-contain"
          :src="availableIcon(resource.icon)"
          alt="Logo"
        />
      </div>
      <div class="flex-1 min-w-0">
        <a :href="resource.url" target="_blank">
          <div>
            <h1 class="text-sm font-medium">
              {{ resource.title }}
            </h1>
            <span
              v-for="(tag, index) in resource.tags"
              :key="index"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
            >
              {{ tag }}
            </span>
          </div>
          <div class="text-sm text-gray-400 pt-2">
            {{ resource.description }}
          </div>
          <div
            class="text-sm text-gray-400 truncate pt-2 underline decoration-2 underline-offset-2"
          >
            {{ resource.url }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import elixirResourcesData from "~/data/elixir_resources";

const resources = ref(elixirResourcesData);

const availableIcon = (icon) => {
  if (icon?.includes("https")) {
    return icon;
  } else {
    return "https://dummyimage.com/16x16/00/00.png";
  }
};
</script>
