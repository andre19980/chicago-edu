import { ref } from "vue";
import { querySchools } from "@/api/schools/schools";
import { type ApiSchoolsParams } from "@/types/Schools";

import type { SchoolData, SchoolTable } from "@/types/Schools";
import { schoolsTableParser } from "@/utils/parsers/schools";

export function useSchools() {
  const schools = ref<SchoolTable[]>();
  const isLoading = ref(false);
  const error = ref<unknown>(null);

  const getSchools = async (params?: ApiSchoolsParams) => {
    isLoading.value = true;
    error.value = null;

    try {
      const data: SchoolData[] = await querySchools(params);
      schools.value = schoolsTableParser(data)
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    schools,
    isLoading,
    error,
    getSchools
  };
}