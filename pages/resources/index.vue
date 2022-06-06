<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      class="relative border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-gray-400"
    >
      <div class="flex-shrink-0">
        <img
          class="h-16 w-16 object-contain"
          :src="availableLogoUrl(meta.icon)"
          alt="Logo"
        />
      </div>
      <div class="flex-1 min-w-0">
        <a :href="meta.url">
          <span class="absolute inset-0" aria-hidden="true" />
          <h1
            class="text-sm font-medium underline decoration-2 underline-offset-2"
          >
            {{ meta.site_name }}
          </h1>
          <h2 class="text-sm text-gray-400 truncate pt-2">
            {{ meta.title }}
          </h2>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import resourcesData from "~/data/resources";

const resources = ref(resourcesData);
const apiUrl = `https://metagrabber.vercel.app/api?url=`;
const meta = ref();
const ressourceUrl = ref(resources.value[0].url);

meta.value = await (
  await fetch(apiUrl + ressourceUrl.value, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    }),
    mode: "no-cors"
  })
).json();

const availableLogoUrl = (url) => {
  if (url.includes("https")) {
    return url;
  } else {
    return ressourceUrl.value + url;
  }
};
console.log(meta.value);
</script>
