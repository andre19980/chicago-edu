<script setup lang="ts">
import IconClose from '@/components/icons/IconClose.vue'

const { open } = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
  <Teleport to="#modal">
    <div v-if="open">
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

      <div class="fixed inset-0 flex items-center justify-center">
        <div class="bg-white rounded-sm shadow-lg relative w-2xl">
          <button
            @click="emit('close')"
            class="absolute top-6 right-6 text-primary hover:text-primary-light hover:cursor-pointer"
          >
            <IconClose />
          </button>

          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
