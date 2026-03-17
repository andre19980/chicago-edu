<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

import SchoolBasicInfosCard from "@/components/cards/SchoolBasicInfosCard.vue";
import DashCardComponent from "@/components/cards/DashCardComponent.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import DashCardChart from "@/components/cards/DashCardChart.vue";
import SchoolAwardsTableComponent from "@/components/tables/SchoolAwardsTableComponent.vue";
import SchoolRatingsListCard from "@/components/cards/SchoolRatingsListCard.vue";
import ModalComponent from "@/components/modals/ModalComponent.vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";

import { useSchool } from "@/composables/useSchool";
import { useDashboardModal } from "@/composables/useDashboardModal";

import { DashboardCardKeys } from "@/types/DashboardCardKeys";

const { params } = useRoute();
const { back } = useRouter();
const {
  isLoading,
  getSchool,
  schoolBasicInfos,
  schoolNumericalMetricsInfos,
  radarChartData,
  schoolAwardsData,
  ratingsList,
} = useSchool();

const {
  isModalOpen,
  closeModal,
  openModal,
  modalText,
  modalTitle,
  cardKey
} = useDashboardModal();

onMounted(async () => {
  await getSchool(params.schoolId as string, {
    fields: [
      "school_id",
      "short_name",
      "long_name",
      "address",
      "city",
      "state",
      "zip",
      "phone",
      "school_type",
      "primary_category",
      "cps_school_profile",
      "website",
      "blue_ribbon_award_year",
      "excelerate_award_gold_year",
      "spot_light_award_year",
      "improvement_award_year",
      "excellence_award_year",
      "supportive_school_award",
      "supportive_school_award_desc",
      "student_attainment_rating",
      "student_attainment_description",
      "culture_climate_rating",
      "culture_climate_description",
      "healthy_school_certification",
      "healthy_school_certification_1",
      "creative_school_certification",
      "creative_school_certification_1",
      "school_survey_involved",
      "school_survey_supportive",
      "school_survey_ambitious",
      "school_survey_effective",
      "school_survey_collaborative",
      "school_survey_safety",
      "suspensions_per_100_students",
      "suspensions_per_100_students_1",
      "student_attendance_year_1",
      "student_attendance_year_2",
      "teacher_attendance_year_1",
      "teacher_attendance_year_2",
      "one_year_dropout_rate_year",
      "one_year_dropout_rate_year_1",
      "graduation_4_year_school",
      "graduation_4_year_school_1",
      "graduation_5_year_school",
      "graduation_5_year_school_1",
      "mobility_rate_pct",
      "chronic_truancy_pct",
      "sat_grade_11_score_school"
    ],
    pageSize: 5000,
    pageNumber: 1
  })
})
</script>

<template>
  <div class="flex flex-col w-full h-full gap-6">
    <button
      class="w-fit text-sm flex items-center hover:underline hover:cursor-pointer text-primary"
      @click="back"
    >
      <IconArrowLeft class="h-5 w-5" />
      Voltar
    </button>
    <div>
      <h1 class="text-3xl font-bold text-primary">{{ schoolBasicInfos.shortName }}</h1>
    </div>

    <SchoolBasicInfosCard :data="schoolBasicInfos" :loading="isLoading" />
    
    <div class="flex flex-col gap-6 md:flex-row md:gap-10">
      <div class="grid sm:grid-cols-3 md:gap-6">
        <DashCardComponent
          v-for="(info, index) in schoolNumericalMetricsInfos"
          :key="index"
          :label="info.label"
          :value="info.value"
          :loading="isLoading"
        />
      </div>

      <div class="flex flex-1">
        <DashCardChart
          label="Pesquisa 5Essentials (+ Segurança)"
          :cardKey="DashboardCardKeys.schoolSurveys"
          @click-info="openModal"
        >
          <div class="h-96 w-full flex justify-center">
            <RadarChart :data="radarChartData" />
          </div>
        </DashCardChart>
      </div>
    </div>

    <SchoolAwardsTableComponent :data="schoolAwardsData" />
    <SchoolRatingsListCard :list="ratingsList" />
  </div>

  <ModalComponent :open="isModalOpen" @close="closeModal">
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">{{ modalTitle }}</h2>
      <div v-if="modalText" v-html="modalText"></div>
      <p v-else>{{ cardKey }}</p>
    </div>
  </ModalComponent>
</template>
