<template>
  <header class="relative flex h-16 flex-shrink-0 items-center bg-white">
    <!-- Logo area -->
    <div class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
      <a
        href="#"
        class="flex h-16 w-16 items-center justify-center bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
      >
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
          alt="Workflow"
        />
      </a>
    </div>

    <!-- Picker area -->
    <div class="mx-auto lg:hidden">
      <!-- Menu button area -->
      <div
        class="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden"
      >
        <!-- Mobile menu button -->
        <button
          type="button"
          class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu, show/hide this `div` based on menu open/closed state -->

    <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
      <!--
        Off-canvas menu backdrop, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div
        class="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75"
      ></div>

      <div class="fixed inset-0 z-40">
        <!--
          Mobile menu, toggle classes based on menu state.

          Entering: "transition ease-out duration-150 sm:ease-in-out sm:duration-300"
            From: "transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
            To: "transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
          Leaving: "transition ease-in duration-150 sm:ease-in-out sm:duration-300"
            From: "transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            To: "transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
        -->
        <div
          class="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-xs sm:w-full sm:shadow-lg"
          aria-label="Global"
        >
          <div class="h-16 flex items-center justify-between px-4 sm:px-6">
            <a href="#">
              <img
                class="block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=cyan&shade=400"
                alt="Workflow"
              />
            </a>
            <button
              type="button"
              class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              <span class="sr-only">Close main menu</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="max-w-8xl mx-auto py-3 px-2 sm:px-4">
            <a
              href="#"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Tips</a
            >

            <a
              href="#"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Tools</a
            >

            <a
              href="#"
              class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              >Projects</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
