<script setup lang="ts">
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import { useSchools } from '@/composables/useSchools';

const { fetchSchools, schools } = useSchools();

onMounted(() => {
  fetchSchools({ fields: ["school_id", "short_name", 'school_type', 'zip'] });
});

</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ schools.length }} schools found.</p>
    {{ schools }}
  </main>
</template>
