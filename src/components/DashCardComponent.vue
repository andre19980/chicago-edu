<script setup lang="ts">
import type { Component } from "vue";
import IconInfo from "@/components/icons/IconInfo.vue";

const { value, label, icon, hasInfo = false } = defineProps<{
  value: number | string;
  label: string;
  icon?: Component;
  hasInfo?: boolean;
}>();
</script>

<template>
  <div class="bg-white w-full h-32 rounded-sm shadow-sm flex flex-col p-4">
      <div class="flex items-center text-gray-700">
      <component :is="icon" class="mr-2 shrink-0 hidden md:block" />
      <p class="uppercase text-sm">{{ label }}</p>

      <button v-if="hasInfo" class="ml-auto hover:cursor-pointer">
        <IconInfo />
      </button>
    </div>
    
    <div class="flex h-full justify-center items-center">
      <p class="text-3xl font-bold text-primary">{{ value }}</p>
    </div>
  </div>
</template>