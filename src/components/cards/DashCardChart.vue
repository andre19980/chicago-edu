<script setup lang="ts">
import IconInfo from "@/components/icons/IconInfo.vue";

const { label, cardKey } = defineProps<{
  label: string;
  cardKey?: string;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: 'clickInfo', key?: string): void
}>()
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm flex flex-col p-4 justify-between items-center flex-1">
    <div class="flex w-full items-center justify-between text-gray-700">
      <p class="uppercase text-sm mb-2">{{ label }}</p>

      <button class="ml-auto hover:cursor-pointer" @click="emit('clickInfo', cardKey)">
        <IconInfo />
      </button>
    </div>

    <slot></slot>
  </div>
</template>