<script lang="ts" setup>
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartData
} from "chart.js";
import { Radar } from "vue-chartjs";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const { data } = defineProps<{
  data: ChartData<"radar", (number | null)[], unknown>
}>()

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    r: {
      min: 0,
      max: 5,
      ticks: { stepSize: 1 },
    },
  },
}
</script>

<template>
  <Radar :data="data" :options="options" />
</template>