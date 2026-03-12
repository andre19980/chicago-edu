<script setup lang="ts">
import { onMounted } from "vue";
import SchoolsTableComponent from "@/components/tables/SchoolsTableComponent.vue";
import { useSchools } from "@/composables/useSchools";

const { schools, getSchools } = useSchools()

onMounted(async () => {
  await getSchools({
    fields: [
      "school_id",
      "short_name",
      "school_type",
      "primary_category",
      "phone",
      "website",
      "blue_ribbon_award_year",
    ],
    pageSize: 5000,
    pageNumber: 1
  });
})
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <div>
      <h1 class="text-3xl font-bold text-primary">Escolas de Chicago 2023-2024</h1>
    </div>

    <div class="w-full">
      <SchoolsTableComponent :data="schools" />
    </div>
  </div>
</template>