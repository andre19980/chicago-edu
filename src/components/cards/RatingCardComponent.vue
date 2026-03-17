<script setup lang="ts">
import { computed } from "vue";

const { title, ratings, rate } =  defineProps<{
  title: string;
  ratings: string[];
  rate: string;
}>();

const rateIndex = computed(() => {
  return ratings.indexOf(rate);
});

</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-md text-primary uppercase">{{ title }}</p>

    <div class="flex flex-row gap-4 overflow-auto">
      <div v-for="(rateData, index) in ratings" :key="index" class="w-full min-w-fit">
        <div class="flex flex-col gap-2">
          <p :class="[
            'h-4 w-full',
            index === rateIndex ? 'text-primary font-semibold' : 'text-primary-lightest',
          ]">{{ rateData }}</p>
  
          <div :class="[
            'h-4 w-full',
            index === rateIndex ? 'bg-primary' : 'bg-primary-lightest',
          ]"></div>
        </div>
      </div>
    </div>  
  </div>
</template>