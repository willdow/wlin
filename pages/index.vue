<template>
  <div class="flex flex-col items-center text-center">
    <h1 class="text-2xl">Hey there</h1>
    <img class="w-64" src="~/assets/img/3logos.png" alt="welcome" />
    <p>I'm Willyan LIN, a full-stack developer.</p>
    <div class="mt-8">
      This site is made by Nuxt3 + Vue3 Composition API + Tailwind CSS
    </div>
    <div class="mt-16">Take a look at :</div>
    <div class="sm:flex-row flex-col flex sm:items-baseline">
      <div
        class="m-2 border border-gray-300 px-6 py-5 flex items-center justify-center hover:border-gray-400"
      >
        <NuxtLink to="/resources/">
          <h1
            class="text-sm font-medium underline decoration-2 underline-offset-2"
          >
            Resources
          </h1>
          <h2 class="text-sm text-gray-400 truncate pt-2">
            Some resources that i want to share.
          </h2>
        </NuxtLink>
      </div>
      <div
        class="m-2 border border-gray-300 px-6 py-5 flex items-center justify-center hover:border-gray-400"
      >
        <NuxtLink to="/tools/">
          <h1
            class="text-sm font-medium underline decoration-2 underline-offset-2"
          >
            Tools
          </h1>
          <h2 class="text-sm text-gray-400 truncate pt-2">
            The tools I use on a daily basis.
          </h2>
        </NuxtLink>
      </div>
      <div
        class="m-2 border border-gray-300 px-6 py-5 flex items-center justify-center hover:border-gray-400"
      >
        <NuxtLink to="/projects/">
          <h1
            class="text-sm font-medium underline decoration-2 underline-offset-2"
          >
            Project
          </h1>
          <h2 class="text-sm text-gray-400 truncate pt-2">Project developed</h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
