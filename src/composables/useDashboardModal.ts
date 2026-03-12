import { ref, computed } from "vue";
import { DashboardInfoModalContents } from "@/utils/mappers/schools";
import type { DashboardCardKey } from "@/types/DashboardCardKeys";

export function useDashboardModal() {
  const isModalOpen = ref(false);
  const cardKey = ref<DashboardCardKey | undefined>();

  const openModal = (key?: DashboardCardKey) => {
    cardKey.value = key
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const modalTitle = computed(() => {
    return cardKey.value ? DashboardInfoModalContents[cardKey.value]?.title : ""
  })

  const modalText = computed(() => {
    return cardKey.value ? DashboardInfoModalContents[cardKey.value]?.text : ""
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