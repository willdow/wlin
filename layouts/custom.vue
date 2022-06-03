<template>
  <div class="flex h-screen flex-col bg-black">
    <Header />
    <div class="flex min-h-0 flex-1 overflow-hidden">
      <Sidebar />
      <main
        class="min-w-0 flex-1 md:flex flex-col justify-center items-center mx-auto p-4 space-y-2"
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
