<script setup lang="ts">
import DashCardComponent from "@/components/cards/DashCardComponent.vue";
import PieChart from "@/components/charts/PieChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import IconSchool from "@/components/icons/IconSchool.vue";
import IconPersonRaiseHand from "@/components/icons/IconPersonRaiseHand.vue";
import IconTrendingUp from "@/components/icons/IconTrendingUp.vue";
import IconTrendingDown from "@/components/icons/IconTrendingDown.vue";
import DashCardChart from "@/components/cards/DashCardChart.vue";
import DashCardBigIcon from "@/components/cards/DashCardBigIcon.vue";
import IconPersonTransfer from "@/components/icons/IconPersonTransfer.vue";
import IconPersonOut from "@/components/icons/IconPersonOut.vue";
import ModalComponent from "@/components/modals/ModalComponent.vue";

import { useDashboardView } from "@/composables/useDashboardView";
import { useDashboardModal } from "@/composables/useDashboardModal";

import { DashboardCardKeys } from "@/types/DashboardCardKeys";

import BlueRibbonSrc from "@/assets/blue-ribbon.png";

const {
  numberOfSchools,
  studentAttendanceAvgPct,
  oneYearDropoutRateAvg,
  graduation4YearAvg,
  schoolTypesDistribution,
  schoolCategoriesDistribution,
  blueRibbonAwardCount,
  mobilityRateAvg,
  chronicTruancyAvg,
} = useDashboardView();

const {
  isModalOpen,
  closeModal,
  openModal,
  modalText,
  modalTitle,
} = useDashboardModal();
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <div>
      <h1 class="text-3xl font-bold text-primary">Escolas de Chicago 2023-2024</h1>
    </div>

    <div class="flex flex-col gap-6 md:flex-row">
      <DashCardComponent :value="numberOfSchools" label="Total de escolas" :icon="IconSchool" />
      <DashCardComponent :value="studentAttendanceAvgPct" label="Frequência Média de Alunos" :icon="IconPersonRaiseHand" />
      <DashCardComponent :value="graduation4YearAvg" label="Taxa média de graduação" :icon="IconTrendingUp" />
      <DashCardComponent :value="oneYearDropoutRateAvg" label="Taxa média de evasão" :icon="IconTrendingDown" />
    </div>

    <div class="flex flex-col gap-6 md:flex-row">
      <DashCardChart
        label="Distribuição de Categorias Escolares"
        :cardKey="DashboardCardKeys.schoolCategories"
        @click-info="openModal"
      >
        <div class="h-96 w-full flex justify-center">
          <PieChart :data="schoolCategoriesDistribution" />
        </div>
      </DashCardChart>

      <DashCardChart
        label="Distribuição de Tipos de Escolas"
        :cardKey="DashboardCardKeys.schoolTypes"
        @click-info="openModal"
      >
        <div class="h-96 w-full flex justify-center">
          <BarChart :data="schoolTypesDistribution" />
        </div>
      </DashCardChart>
    </div>

    <div class="flex flex-col gap-6 md:flex-row">
      <DashCardBigIcon
        :value="blueRibbonAwardCount" 
        label="Número de escolas vencedoras do Blue Ribbon" 
        :icon="BlueRibbonSrc"
        :cardKey="DashboardCardKeys.blueRibbonAward"
        @click-info="openModal"
      />
      <DashCardBigIcon
        :value="chronicTruancyAvg"
        label="Taxa de faltas crônicas"
        :icon="IconPersonOut"
        :cardKey="DashboardCardKeys.chronicTruancy"
        @click-info="openModal"
      />
      <DashCardBigIcon
        :value="mobilityRateAvg"
        label="Taxa de mobilidade"
        :icon="IconPersonTransfer"
        :cardKey="DashboardCardKeys.mobilityRate"
        @click-info="openModal"
      />
    </div>
  </div>

  <ModalComponent :open="isModalOpen" @close="closeModal">
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">{{ modalTitle }}</h2>
      <div v-html="modalText"></div>
    </div>
  </ModalComponent>
</template>
