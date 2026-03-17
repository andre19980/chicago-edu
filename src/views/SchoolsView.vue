<script setup lang="ts">
import { onMounted } from 'vue'
import SchoolsTableComponent from '@/components/tables/SchoolsTableComponent.vue'
import { useSchools } from '@/composables/useSchools'
import { VueSpinner } from 'vue3-spinners'

const { schools, isLoading, getSchools } = useSchools()

onMounted(async () => {
  await getSchools({
    fields: [
      'school_id',
      'short_name',
      'school_type',
      'primary_category',
      'phone',
      'website',
      'blue_ribbon_award_year',
    ],
    pageSize: 1000,
    pageNumber: 1,
  })
})
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <div>
      <h1 class="text-3xl font-bold text-primary">Escolas de Chicago 2023-2024</h1>
    </div>

    <div class="w-full h-full">
      <div v-if="isLoading" role="status" class="w-full h-full flex items-center justify-center">
        <VueSpinner class="w-10 h-10 text-primary" />
      </div>

      <SchoolsTableComponent v-else-if="schools && !isLoading" :data="schools" />
    </div>
  </div>
</template>
