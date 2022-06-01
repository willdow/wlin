<template>
  <!-- Narrow sidebar-->
  <nav
    aria-label="Sidebar"
    class="hidden lg:block lg:flex-shrink-0 lg:overflow-y-auto bg-black"
  >
    <div class="relative flex w-20 flex-col space-y-3 p-3">
      <a
        href="#"
        class="flex flex-col h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
          ></path>
        </svg>
        <span class="text-xs mt-1">Tips</span>
      </a>

      <a
        href="#"
        class="flex flex-col h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700"
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
      </a>

      <a
        href="#"
        class="flex flex-col h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-700"
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
      </a>
    </div>
  </nav>
</template>
