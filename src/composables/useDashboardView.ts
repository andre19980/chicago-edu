import { ref, computed, onMounted } from "vue";
import { querySchools } from "@/api/schools/schools";
import { type ApiSchoolsParams, type SchoolData } from "@/api/schools/schools.types";

export function useDashboardView() {
  const schools = ref([]);
  const isLoading = ref(false);
  const error = ref<unknown>(null);

  const getSchools = async (params?: ApiSchoolsParams) => {
    isLoading.value = true;
    error.value = null;

    try {
      schools.value = await querySchools(params);
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    await getSchools({
      fields: [
        "school_id",
        "short_name",
        "school_type",
        "primary_category",
        "student_attendance_year_1",
        "student_attendance_year_2",
        "teacher_attendance_year_1",
        "teacher_attendance_year_2",
        "one_year_dropout_rate_year",
        "one_year_dropout_rate_year_1",
        "graduation_4_year_school",
        "graduation_4_year_school_1",
      ],
      pageSize: 5000,
      pageNumber: 1
    });
  });

  const numberOfSchools = computed(() => {
    return schools.value.length;
  });

  const schoolCategoriesDistribution = computed(() => {
    const distribution: Record<string, number> = {};
    
    schools.value.forEach((school: SchoolData) => {
      const category = school.primaryCategory;

      if (category) {
        distribution[category] = (distribution[category] || 0) + 1;
      }
    });

    return distribution;
  });

  const schoolTypesDistribution = computed(() => {
    const distribution: Record<string, number> = {};

    schools.value.forEach((school: SchoolData) => {
      const type = school.schoolType;

      if (type) {
        distribution[type] = (distribution[type] || 0) + 1;
      }
    });

    return distribution;
  });

  const studentAttendanceAvgPct = computed(() => {
    let sumAttendanceAvgPct = 0;
    let validSchoolsCount = 0;

    schools.value.forEach((school: SchoolData) => {
      if (school.studentAttendanceYear1 && school.studentAttendanceYear2) {
        sumAttendanceAvgPct += (parseFloat(school.studentAttendanceYear1) + parseFloat(school.studentAttendanceYear2)) / 2;
        validSchoolsCount++;
      } else if (school.studentAttendanceYear1 && !school.studentAttendanceYear2) {
        sumAttendanceAvgPct += parseFloat(school.studentAttendanceYear1);
        validSchoolsCount++;
      } else if (!school.studentAttendanceYear1 && school.studentAttendanceYear2) {
        sumAttendanceAvgPct += parseFloat(school.studentAttendanceYear2);
        validSchoolsCount++;
      }
    })
    
    return (sumAttendanceAvgPct / validSchoolsCount).toFixed(2);
  });

  const teacherAttendanceAvgPct = computed(() => {
    let sumAttendanceAvgPct = 0;
    let validSchoolsCount = 0;

    schools.value.forEach((school: SchoolData) => {
      if (school.teacherAttendanceYear1 && school.teacherAttendanceYear2) {
        sumAttendanceAvgPct += (parseFloat(school.teacherAttendanceYear1) + parseFloat(school.teacherAttendanceYear2)) / 2;
        validSchoolsCount++;
      } else if (school.teacherAttendanceYear1 && !school.teacherAttendanceYear2) {
        sumAttendanceAvgPct += parseFloat(school.teacherAttendanceYear1);
        validSchoolsCount++;
      } else if (!school.teacherAttendanceYear1 && school.teacherAttendanceYear2) {
        sumAttendanceAvgPct += parseFloat(school.teacherAttendanceYear2);
        validSchoolsCount++;
      }
    })
    
    return (sumAttendanceAvgPct / validSchoolsCount).toFixed(2);
  });

  const oneYearDropoutRateAvg = computed(() => {
    let sumDropoutRate = 0;
    let validSchoolsCount = 0;

    schools.value.forEach((school: SchoolData) => {
      if (school.oneYearDropoutRateYear && school.oneYearDropoutRateYear1) {
        sumDropoutRate += (parseFloat(school.oneYearDropoutRateYear) + parseFloat(school.oneYearDropoutRateYear1)) / 2;
        validSchoolsCount++;
      } else if (school.oneYearDropoutRateYear && !school.oneYearDropoutRateYear1) {
        sumDropoutRate += parseFloat(school.oneYearDropoutRateYear);
        validSchoolsCount++;
      } else if (!school.oneYearDropoutRateYear && school.oneYearDropoutRateYear1) {
        sumDropoutRate += parseFloat(school.oneYearDropoutRateYear1);
        validSchoolsCount++;
      }
    })

    return (sumDropoutRate / validSchoolsCount).toFixed(2);
  });

  const graduation4YearAvg = computed(() => {
    let sumGraduation4Year = 0;
    let validSchoolsCount = 0;

    schools.value.forEach((school: SchoolData) => {
      if (school.graduation4YearSchool && school.graduation4YearSchool1) {
        sumGraduation4Year += (parseFloat(school.graduation4YearSchool) + parseFloat(school.graduation4YearSchool1)) / 2;
        validSchoolsCount++;
      } else if (school.graduation4YearSchool && !school.graduation4YearSchool1) {
        sumGraduation4Year += parseFloat(school.graduation4YearSchool);
        validSchoolsCount++;
      } else if (!school.graduation4YearSchool && school.graduation4YearSchool1) {
        sumGraduation4Year += parseFloat(school.graduation4YearSchool1);
        validSchoolsCount++;
      }
    })

    return (sumGraduation4Year / validSchoolsCount).toFixed(2);
  });

  return {
    schools,
    isLoading,
    error,
    numberOfSchools,
    schoolCategoriesDistribution,
    schoolTypesDistribution,
    studentAttendanceAvgPct,
    teacherAttendanceAvgPct,
    oneYearDropoutRateAvg,
    graduation4YearAvg,
  };
}