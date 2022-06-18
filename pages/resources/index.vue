<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="resource in resources"
      :key="resource.id"
      class="relative border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-gray-400"
    >
      <div class="flex-shrink-0">
        <img
          class="h-16 w-16 object-contain"
          :src="availableIcon(resource.icon)"
          alt="Logo"
        />
      </div>
      <div class="flex-1 min-w-0">
        <a :href="resource.url">
          <h1
            class="text-sm font-medium"
          >
            {{ resource.title }}
          </h1>
          <div class="text-sm text-gray-400 pt-2">
            {{ resource.description }}
          </div>
          <div class="text-sm text-gray-400 truncate pt-2 underline decoration-2 underline-offset-2">
            {{ resource.url }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import resourcesData from "~/data/resources";

const resources = ref(resourcesData);

const availableIcon = (icon) => {
  if (icon?.includes("https")) {
    return icon;
  } else {
    return "https://dummyimage.com/16x16/ff/ff.png";
  }
};
</script>
