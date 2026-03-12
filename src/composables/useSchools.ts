import { ref, onMounted } from "vue";
import { querySchools } from "@/api/schools/schools";
import { type ApiSchoolsParams } from "@/api/schools/schools.types";
import camelcaseKeys from "camelcase-keys";

import schoolsMocked from "@/assets/schools.json";
import type { SchoolTable } from "@/types/Schools";

export function useSchools() {
  const schools = ref<SchoolTable[]>(camelcaseKeys(schoolsMocked) as SchoolTable[]);
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

  return {
    schools,
    isLoading,
    error,
    getSchools
  };
}