<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>

<template>
  <SidebarComponent />
  <main class="w-full h-auto ml-20 p-8 bg-gray-100 md:ml-0">
    <RouterView />
  </main>
</template>
