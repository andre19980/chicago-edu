<template>
  <aside :class="[
    'flex flex-col min-h-full overflow-hidden bg-primary text-white transition-all delay-150 duration-300 ease-in fixed z-50 md:static md:z-0',
    isOpen ? 'min-w-(--sidebar-width) w-(--sidebar-width)' : 'min-w-20 w-20']"
  >
    <!-- Logo -->
    <div class="flex w-fit p-4">
      <span class="text-2xl font-bold bg-amber-500 p-2 rounded-full w-fit">CE</span>
    </div>

    <!-- Toggle Button -->
    <div :class="[
      'flex relative justify-end transition-all delay-150 duration-300 ease-in',
      isOpen ? '-top-16 right-4' : 'top-0 right-6'
    ]">
      <button
        :class="[
          'w-fit p-1 rounded transition-transform delay-150 duration-300 ease-in hover:cursor-pointer hover:bg-primary-light',
          isOpen ? '-rotate-180' : 'rotate-0'
        ]"
        @click="onToggleSidebar"
      >
        <IconDoubleArrowRight />
      </button>
    </div>

    <!-- Navigation Links -->
    <h3 :class="[
      'text-sm transition-opacity delay-150 duration-300 px-4 mb-2 font-bold uppercase',
      isOpen ? 'opacity-60' : 'opacity-0'
    ]">
      Menu
    </h3>

    <nav>
      <SidebarItemComponent
        v-for="(item, index) in sidebarConfig"
        :key="index"
        :isOpen="isOpen"
        :name="item.name"
        :to="item.route"
        :iconComponent="item.iconComponent"
      />
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import IconDoubleArrowRight from '@/components/icons/IconDoubleArrowRight.vue';
import SidebarItemComponent from '@/components/sidebar/SidebarItemComponent.vue';
import sidebarConfig from './config';

const isOpen = ref(false);

const onToggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

</script>
