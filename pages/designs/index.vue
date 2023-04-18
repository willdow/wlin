<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="(design, index) in designs"
      :key="'design' + index"
      class="relative border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-red-500"
    >
      <div class="flex-shrink-0">
        <img
          class="h-16 w-16 object-contain"
          :src="availableIcon(design.icon)"
          alt="Logo"
        />
      </div>
      <div class="flex-1 min-w-0">
        <a :href="design.url" target="_blank">
          <div>
            <h1 class="text-sm font-medium">
              {{ design.title }}
            </h1>
            <span
              v-for="(tag, index) in design.tags"
              :key="index"
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
            >
              {{ tag }}
            </span>
          </div>
          <div class="text-sm text-gray-400 pt-2">
            {{ design.description }}
          </div>
          <div
            class="text-sm text-gray-400 truncate pt-2 underline decoration-2 underline-offset-2"
          >
            {{ design.url }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import designsData from "~/data/designs";

const designs = ref(designsData);

const availableIcon = (icon) => {
  if (icon?.includes("https")) {
    return icon;
  } else {
    return "https://dummyimage.com/16x16/00/00.png";
  }
};
</script>
