<script setup lang="ts">
import type { Component } from 'vue'
import IconInfo from '@/components/icons/IconInfo.vue'
import { VueSpinner } from 'vue3-spinners'

const { value, label, icon, cardKey, loading } = defineProps<{
  label: string
  value: number | string
  icon: Component | string
  cardKey?: string
  loading?: boolean
}>()

const emit = defineEmits<{
  (e: 'clickInfo', key?: string): void
}>()
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm flex flex-row p-4 gap-4 w-full">
    <div class="flex items-center">
      <img v-if="typeof icon === 'string'" :src="icon" alt="Icon" class="h-24 w-fit" />
      <component v-else :is="icon" class="h-18 w-fit text-primary" data-test="big-icon"/>
    </div>
    <div class="flex flex-col flex-1">
      <div class="flex flex-row justify-between items-center">
        <p class="text-sm uppercase text-gray-700" data-test="label">{{ label }}</p>

        <button class="ml-auto hover:cursor-pointer" @click="emit('clickInfo', cardKey)">
          <IconInfo />
        </button>
      </div>
      <div class="flex h-full justify-center items-center">
        <VueSpinner v-if="loading" class="w-8 h-8 text-primary" data-test="spinner" />
        <p v-else class="text-3xl font-bold text-primary" data-test="card-value">{{ value }}</p>
      </div>
    </div>
  </div>
</template>
