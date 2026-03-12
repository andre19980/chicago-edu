<script setup lang="ts">
import type { Component } from "vue";
import IconInfo from "@/components/icons/IconInfo.vue";

const { value, label, icon, cardKey } = defineProps<{
  label: string;
  value: number | string;
  icon: Component | string;
  cardKey?: string;
}>();

const emit = defineEmits<{
  (e: 'clickInfo', key?: string): void
}>()
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm flex flex-row p-4 gap-4 w-full">
    <div class="flex items-center">
      <img v-if="typeof icon === 'string'" :src="icon" alt="Icon" class="h-24 w-fit" />
      <component v-else :is="icon" class="h-18 w-fit text-primary" />
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex  flex-row justify-between items-center">
        <p class="text-sm uppercase text-gray-700">{{ label }}</p>

        <button class="ml-auto hover:cursor-pointer" @click="emit('clickInfo', cardKey)">
          <IconInfo />
        </button>
      </div>
      <div class="flex h-full justify-center items-center">
        <p class="text-3xl font-bold text-primary">{{ value }}</p>
      </div>
    </div>
  </div>
</template>