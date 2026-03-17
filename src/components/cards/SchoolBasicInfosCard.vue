<script setup lang="ts">
import { computed } from 'vue'
import { VueSpinner } from 'vue3-spinners'

const { data } = defineProps<{
  data: {
    id?: string
    shortName?: string
    longName?: string
    address?: string
    city?: string
    state?: string
    zip?: string
    phone?: string
    type?: string
    primaryCategory?: string
    cpsProfileUrl?: string
    website?: string
  }
  loading?: boolean
}>()

const generalInfo = computed(() => [
  {
    label: '# Id',
    value: data.id,
  },
  {
    label: 'Nome completo',
    value: data.longName,
  },
  {
    label: 'Contato',
    value: data.phone,
  },
  {
    label: 'Tipo de escola',
    value: data.type,
  },
  {
    label: 'Categoria escolar',
    value: data.primaryCategory,
  },
])

const addressInfo = computed(() => [
  {
    label: 'Endereço',
    value: data.address,
  },
  {
    label: 'Cidade',
    value: data.city,
  },
  {
    label: 'Estado',
    value: data.state,
  },
  {
    label: 'CEP',
    value: data.zip,
  },
])

const urlsInfo = computed(() => [
  {
    label: 'Perfil CPS',
    value: data.cpsProfileUrl,
  },
  {
    label: 'Website',
    value: data.website,
  },
])
</script>

<template>
  <!-- Basic Info Section -->
  <div v-if="loading" class="bg-white flex w-full rounded shadow-sm p-6 gap-10 justify-center">
    <VueSpinner class="w-8 h-8 text-primary" />
  </div>
  <div v-else class="bg-white flex flex-col w-full rounded shadow-sm p-6 gap-10 justify-between">
    <div class="flex flex-col gap-4 md:flex-row md:gap-10">
      <div v-for="(info, index) in generalInfo" :key="index" class="flex flex-col gap-2 w-72">
        <p class="text-sm font-bold uppercase text-primary">{{ info.label }}</p>
        <p class="text-md text-gray-700 overflow-auto">{{ info.value }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-4 md:flex-row md:gap-10">
      <div v-for="(info, index) in addressInfo" :key="index" class="flex flex-col gap-2 w-72">
        <p class="text-sm font-bold uppercase text-primary">{{ info.label }}</p>
        <p class="text-md text-gray-700 overflow-auto">{{ info.value }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-4 md:flex-row md:gap-10">
      <div v-for="(info, index) in urlsInfo" :key="index" class="flex flex-col gap-2">
        <p class="text-sm font-bold uppercase text-primary">{{ info.label }}</p>
        <a
          :href="info.value"
          target="_blank"
          class="text-md text-gray-700 overflow-auto hover:text-primary hover:underline"
          >{{ info.value }}</a
        >
      </div>
    </div>
  </div>
</template>
