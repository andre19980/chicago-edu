<script setup lang="ts">
import { onBeforeMount } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useSchools } from '@/composables/useSchools';

const { fetchSchools, schools } = useSchools();

onBeforeMount(() => {
  fetchSchools();
});

console.log(schools.value);

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
