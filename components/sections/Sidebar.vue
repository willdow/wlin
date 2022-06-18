<template>
  <!-- Narrow sidebar-->
  <nav
    aria-label="Sidebar"
    class="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto border-r border-gray-800"
  >
    <div class="relative flex w-20 flex-col space-y-3 p-3 text-gray-400">
      <NuxtLink
        to="/resources"
        class="flex flex-col h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg hover:bg-red-900"
        active-class="bg-gray-900 text-white"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          ></path>
        </svg>
        <span class="text-xs mt-1">Resources</span>
      </NuxtLink>

      <NuxtLink
        to="/tools"
        class="flex flex-col h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg hover:bg-red-900"
        active-class="bg-gray-900 text-white"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path
            d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"
          ></path>
        </svg>
        <span class="text-xs mt-1">Tools</span>
      </NuxtLink>

      <NuxtLink
        to="/projects"
        class="flex flex-col h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg hover:bg-red-900"
        active-class="bg-gray-900 text-white"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="text-xs mt-1">Projects</span>
      </NuxtLink>
    </div>
  </nav>
</template>
