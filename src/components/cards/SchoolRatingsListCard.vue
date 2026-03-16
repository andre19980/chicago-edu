<script setup lang="ts">
import RatingCardComponent from './RatingCardComponent.vue';
const { list } = defineProps<{
  list: Array<{
    title: string;
    ratingScale: string[];
    rate: string;
  }>
}>();
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm flex flex-col p-6 gap-12 w-full">
    <RatingCardComponent
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :ratings="item.ratingScale"
      :rate="item.rate"
    />
  </div>
</template>