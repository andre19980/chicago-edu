<script setup lang="ts">
import { type Component } from "vue";
import { VueSpinner } from "vue3-spinners";

const { value, label, icon, loading } = defineProps<{
  value: number | string;
  label: string;
  icon?: Component;
  loading?: boolean;
}>();
</script>

<template>
  <div class="bg-white w-full h-32 rounded-sm shadow-sm flex flex-col p-4">
    <div class="flex items-center text-gray-700">
      <component :is="icon" class="mr-2 shrink-0 hidden md:block" />
      <p class="uppercase text-sm">{{ label }}</p>
    </div>
    
    <div class="flex h-full justify-center items-center">
      <VueSpinner v-if="loading" class="w-8 h-8 text-primary"/>
      <p v-else class="text-3xl font-bold text-primary">{{ value }}</p>
    </div>
  </div>
</template>