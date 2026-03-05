import { ref } from "vue";
import { getSchools, type ApiSchoolsParams } from "@/api/schools";

export function useSchools() {
  const schools = ref([]);
  const isLoading = ref(false);
  const error = ref<unknown>(null);

  const fetchSchools = async (params?: ApiSchoolsParams) => {
    isLoading.value = true;
    error.value = null;

    try {
      schools.value = await getSchools(params);
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
    fetchSchools
  };
}