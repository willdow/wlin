<template>
  <div class="flex min-h-screen flex-col bg-black">
    <Header />
    <div class="flex min-h-0 flex-1 overflow-hidden">
      <Sidebar />
      <main
        class="min-w-0 flex-1 md:flex flex-col justify-center items-center mx-auto space-y-2 text-white max-w-7xl sm:px-6 lg:px-8"
      >
        <slot />
      </main>
    </div>
    <footer class="flex items-center justify-center w-full h-8">
      <p class="text-gray-700 text-sm">
        © {{ new Date().getFullYear() }} Willyan LIN
      </p>
    </footer>
  </div>
</template>
<script setup>
import Header from "@/components/sections/Header.vue";
import Sidebar from "@/components/sections/Sidebar.vue";
</script>
