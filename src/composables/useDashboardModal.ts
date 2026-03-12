import { ref, computed } from "vue";
import { DashboardInfoModalContents } from "@/utils/mappers/schools";
import { DashboardCardKeys } from "@/types/DashboardCardKeys";

export function useDashboardModal() {
  const isModalOpen = ref(false);
  const cardKey = ref<string | undefined>();

  const openModal = (key?: string) => {
    cardKey.value = key
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const modalTitle = computed(() => {
    return cardKey.value ? DashboardInfoModalContents[cardKey.value as DashboardCardKeys]?.title : ""
  })

  const modalText = computed(() => {
    return cardKey.value ? DashboardInfoModalContents[cardKey.value as DashboardCardKeys]?.text : ""
  })

  return {
    isModalOpen,
    modalTitle,
    modalText,
    cardKey,
    openModal,
    closeModal,
  };
}