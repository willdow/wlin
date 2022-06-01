<template>
  <div class="flex h-screen flex-col">
    <Header />
    <div class="flex min-h-0 flex-1 overflow-hidden">
      <Sidebar />
      <main class="min-w-0 flex-1 border-t border-gray-200 xl:flex">
        <slot />
      </main>
    </div>
    <footer class="flex items-center justify-center w-full h-16 bg-black">
      <p class="text-white text-sm">
        © {{ new Date().getFullYear() }} Willyan LIN
      </p>
    </footer>
  </div>
</template>
<script setup>
import Header from "@/components/sections/Header.vue";
import Sidebar from "@/components/sections/Sidebar.vue";
</script>
