<script setup lang="ts">
import { useDashboardView } from "@/composables/useDashboardView";
import DashCardComponent from "@/components/DashCardComponent.vue";
import IconSchool from "@/components/icons/IconSchool.vue";
import IconPersonRaiseHand from "@/components/icons/IconPersonRaiseHand.vue";
import IconTrendingUp from "@/components/icons/IconTrendingUp.vue";
import IconTrendingDown from "@/components/icons/IconTrendingDown.vue";

const {
  numberOfSchools,
  studentAttendanceAvgPct,
  oneYearDropoutRateAvg,
  graduation4YearAvg,
} = useDashboardView();
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <div>
      <h1 class="text-3xl font-bold text-primary">Chicago Schools Dashboard</h1>
    </div>

    <div class="flex flex-col gap-6 md:flex-row">
      <DashCardComponent :value="numberOfSchools" label="Total de escolas" :icon="IconSchool" />
      <DashCardComponent :value="studentAttendanceAvgPct" label="Frequência Média de Alunos" :icon="IconPersonRaiseHand" />
      <DashCardComponent :value="graduation4YearAvg" label="Taxa média de graduação" :icon="IconTrendingUp" />
      <DashCardComponent :value="oneYearDropoutRateAvg" label="Taxa média de evasão" :icon="IconTrendingDown" />
    </div>
  </div>
</template>
