<template>
  <header class="relative flex h-16 flex-shrink-0 items-center">
    <!-- Logo area -->
    <div
      class="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0 lg:border-r border-gray-800"
    >
      <NuxtLink
        @click="onToggleMenu"
        to="/"
        class="flex h-16 w-16 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:w-20"
      >
        <img class="h-8 w-auto" src="~/assets/img/logo.svg" alt="Logo" />
      </NuxtLink>
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
          class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
          @click="onToggleMenu"
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

    <div
      class="relative z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      v-if="isMenuOpen"
    >
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
          class="fixed z-40 inset-0 h-full w-full bg-black sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-xs sm:w-full sm:shadow-lg"
          aria-label="Global"
          v-click-away="onToggleMenu"
        >
          <div class="h-16 flex items-center justify-between px-4 sm:px-6">
            <NuxtLink @click="onToggleMenu" to="/">
              <img
                class="block h-8 w-auto"
                src="~/assets/img/logo.svg"
                alt="Logo"
              />
            </NuxtLink>
            <button
              type="button"
              class="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
              @click="onToggleMenu"
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
            <NuxtLink @click="onToggleMenu" to="/tips">
              <div
                class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-900"
              >
                Tips
              </div>
            </NuxtLink>
            <NuxtLink @click="onToggleMenu" to="/tools">
              <div
                class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-900"
              >
                Tools
              </div>
            </NuxtLink>

            <NuxtLink @click="onToggleMenu" to="/projects">
              <div
                class="block rounded-md py-2 px-3 text-base font-medium text-white hover:bg-gray-900"
              >
                Projects
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const onToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
