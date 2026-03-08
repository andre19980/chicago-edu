<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { Component } from 'vue';

const { isOpen, name, to, iconComponent } = defineProps<{
  isOpen: boolean;
  name: string;
  to: string;
  iconComponent: Component;
}>();

</script>

<template>
  <RouterLink :to="to" :class="['flex items-center px-6 py-4 hover:bg-primary-light active:bg-primary-light']">
        <component :is="iconComponent" class="flex w-6 h-6 mr-3 shrink-0"/>

        <span :class="[
          'transition-opacity delay-150 duration-300',
          isOpen ? 'opacity-100' : 'opacity-0'
        ]">
          {{ name }}
        </span>
  </RouterLink>
</template>