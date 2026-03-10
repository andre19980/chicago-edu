<script lang="ts" setup>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData
} from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

const { data } = defineProps<{
  data: ChartData<"pie", number[], unknown>;
}>();

const options = {
  responsive: true,
  maintainAspectRatio: true
}
</script>

<template>
  <Pie :data="data" :options="options" />
</template>