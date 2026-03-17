import { ref, computed } from "vue";
import { querySchool } from "@/api/schools/schools";
import type {
  ApiSchoolsParams,
  CreativeSchoolCertificationKeys,
  CultureClimateRatingKeys,
  School,
  SchoolData,
  StudentAttainmentRatingKeys,
  SupportiveSchoolAwardKeys
} from "@/types/Schools";
import { schoolParser } from "@/utils/parsers/schools";
import { evalAverage } from "@/utils/evaluators/mathEvaluators";
import { formatDisplayedPercentage } from "@/utils/formatters/formatters";
import {
  SchoolSurveysLabels,
  SchoolAwardsLabels,
  CreativeSchoolCertification,
  SupportiveSchoolAward,
  StudentAttainmentRating,
  CultureClimateRating,
} from "@/utils/mappers/schools";
import { DashboardCardKeys } from "@/types/DashboardCardKeys";

export function useSchool() {
  const school = ref<School>();
  const isLoading = ref(false);
  const error = ref<unknown>(null);

  const getSchool = async (id: string, params?: ApiSchoolsParams) => {
    isLoading.value = true;
    error.value = null;

    try {
      const data: SchoolData = await querySchool(id, params);
      school.value = schoolParser(data);
    } catch (err) {
      console.log(err)
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  const schoolBasicInfos = computed(() => {
    return {
      id: school.value?.schoolId,
      shortName: school.value?.shortName,
      longName: school.value?.longName,
      address: school.value?.address,
      city: school.value?.city,
      state: school.value?.state,
      zip: school.value?.zip,
      phone: school.value?.phone,
      type: school.value?.schoolType,
      primaryCategory: school.value?.primaryCategory,
      cpsProfileUrl: school.value?.cpsSchoolProfile,
      website: school.value?.website,
    }
  })

  const suspensionsPer100StudentsAvg = computed(() => {
    if (!school.value) return '-';
  
    const evaluatedAvg = evalAverage([
      school.value?.suspensionsPer100StudentsYear1Pct,
      school.value?.suspensionsPer100StudentsYear2Pct,
    ]);

    return formatDisplayedPercentage(evaluatedAvg);
  })

  const studentAttendanceYearAvg = computed(() => {
    if (!school.value) return '-';

    const evaluatedAvg = evalAverage([
      school.value?.studentAttendanceYear1,
      school.value?.studentAttendanceYear2,
    ]);

    return formatDisplayedPercentage(evaluatedAvg);
  })

  const teacherAttendanceYearAvg = computed(() => {
    if (!school.value) return '-';

    const evaluatedAvg = evalAverage([
      school.value?.teacherAttendanceYear1,
      school.value?.teacherAttendanceYear2,
    ]);

    return formatDisplayedPercentage(evaluatedAvg);
  })

  const graduation4YearSchoolPctAvg = computed(() => {
    if (!school.value) return '-';

    const evaluatedAvg = evalAverage([
      school.value?.graduation4YearSchoolPctYear1,
      school.value?.graduation4YearSchoolPctYear2,
    ]);

    return formatDisplayedPercentage(evaluatedAvg);
  })

  const graduation5YearSchoolPctAvg = computed(() => {
    if (!school.value) return '-';

    const evaluatedAvg = evalAverage([
      school.value?.graduation5YearSchoolPctYear1,
      school.value?.graduation5YearSchoolPctYear2,
    ]);

    return formatDisplayedPercentage(evaluatedAvg);
  })

  const oneYearDropoutRatePctAvg = computed(() => {
    if (!school.value) return '-';

    const evaluatedAvg = evalAverage([
      school.value?.oneYearDropoutRateYear1Pct,
      school.value?.oneYearDropoutRateYear2Pct,
    ]);

    return formatDisplayedPercentage(evaluatedAvg);
  })

  const schoolNumericalMetricsInfos = computed(() => {
    return [
      {
        label: "Média de suspensões por 100 alunos",
        value: suspensionsPer100StudentsAvg.value,
      },
      {
        label: "Média anual de frequência dos alunos",
        value: studentAttendanceYearAvg.value,
      },
      {
        label: "Média anual de frequência dos professores",
        value: teacherAttendanceYearAvg.value,
      },
      {
        label: "Taxa de mobilidade escolar",
        value: formatDisplayedPercentage(school.value?.mobilityRatePct ?? NaN),
      },
      {
        label: "Percentual de faltas crônicas",
        value: formatDisplayedPercentage(school.value?.chronicTruancyPct ?? NaN),
      },
      {
        label: "Média da pontuação no SAT (11º ano)",
        value: school.value?.satGrade11ScoreSchoolAvg ?? '-',
      },
      {
        label: "Taxa média de conclusão em 4 anos",
        value: graduation4YearSchoolPctAvg.value,
      },
      {
        label: "Taxa média de conclusão em 5 anos",
        value: graduation5YearSchoolPctAvg.value,
      },
      {
        label: "Taxa média de evasão escolar em um ano",
        value: oneYearDropoutRatePctAvg.value,
      },
    ]
  });

  const radarChartData = computed(() => {
    if (!school.value) return null;

    const scores = [
      school.value.schoolSurveyInvolvedFamilies,
      school.value.schoolSurveySupportiveEnvironment,
      school.value.schoolSurveyAmbitiousInstruction,
      school.value.schoolSurveyEffectiveLeaders,
      school.value.schoolSurveyCollaborativeTeachers,
      school.value.schoolSurveySafety
    ]

    const data = {
      labels: Object.values(SchoolSurveysLabels),
      datasets: [
        {
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: scores
        },
      ],
    };

    return data;
  });

  const schoolAwardsData = computed(() => {
    if (!school.value) return [];

    return [
      {
        name: SchoolAwardsLabels.excelerateAwardGoldYear,
        year: school.value.excelerateAwardGoldYear,
      },
      {
        name: SchoolAwardsLabels.blueRibbonAwardYear,
        year: school.value.blueRibbonAwardYear,
      },
      {
        name: SchoolAwardsLabels.excellenceAwardYear,
        year: school.value.excellenceAwardYear,
      },
      {
        name: SchoolAwardsLabels.improvementAwardYear,
        year: school.value.improvementAwardYear,
      },
      {
        name: SchoolAwardsLabels.spotLightAwardYear,
        year: school.value.spotLightAwardYear,
      }
    ].filter(award => Boolean(award.year))
  });

  const supportiveSchoolAward = computed(() => {
    if (!school.value) return null;

    return {
      title: "Prêmio de Escola Acolhedora",
      ratingScale: Object.values(SupportiveSchoolAward),
      rate: SupportiveSchoolAward[school.value.supportiveSchoolAward as SupportiveSchoolAwardKeys] ?? "",
      cardKey: DashboardCardKeys.supportiveSchoolAward,
    }
  })

  const studentAttainmentRating = computed(() => {
    if (!school.value) return null;

    return {
      title: "Avaliação de Desempenho do Estudantes",
      ratingScale: Object.values(StudentAttainmentRating),
      rate: StudentAttainmentRating[school.value.studentAttainmentRating as StudentAttainmentRatingKeys] ?? "",
      cardKey: DashboardCardKeys.studentAttainmentRating,
    }
  })

  const cultureClimateRating = computed(() => {
    if (!school.value) return null;

    return {
      title: "Avaliação de Cultura e Clima Escolar",
      ratingScale: Object.values(CultureClimateRating),
      rate: CultureClimateRating[school.value.cultureClimateRating as CultureClimateRatingKeys] ?? "",
      cardKey: DashboardCardKeys.cultureClimateRating,
    }
  })

  const creativeSchoolCertification = computed(() => {
    if (!school.value) return null;

    return {
      title: "Certificação de Escola Criativa",
      ratingScale: Object.values(CreativeSchoolCertification),
      rate: CreativeSchoolCertification[school.value.creativeSchoolCertification as CreativeSchoolCertificationKeys] ?? "",
      cardKey: DashboardCardKeys.creativeSchoolCertification,
    }
  })

  const ratingsList = computed(() => {
    return [
      creativeSchoolCertification.value,
      supportiveSchoolAward.value,
      studentAttainmentRating.value,
      cultureClimateRating.value,
    ].filter(item => item !== null);
  });

  return {
    school,
    isLoading,
    error,
    getSchool,
    schoolBasicInfos,
    schoolNumericalMetricsInfos,
    radarChartData,
    schoolAwardsData,
    ratingsList
  };
}