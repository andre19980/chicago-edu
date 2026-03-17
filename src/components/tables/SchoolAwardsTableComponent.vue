<script setup lang="ts">
import { computed, ref } from "vue";
import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  createColumnHelper,
  type SortingState,
} from "@tanstack/vue-table";
import IconAsc from "@/components/icons/IconAsc.vue";
import IconDesc from "@/components/icons/IconDesc.vue";

import { type SchoolAward } from "@/types/Schools";

const props = defineProps<{
  data: SchoolAward[]
}>();

const columnHelper = createColumnHelper<SchoolAward>();

const columns = [
  columnHelper.accessor("name", {
    header: "Prêmio recebido",
  }),
  columnHelper.accessor("year", {
    header: "Ano",
  }),
]

const dataTable = computed(() => props.data)

const sorting = ref<SortingState>([])

const table = useVueTable({
  data: dataTable,
  columns: columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  state: {
    get sorting() {
      return sorting.value
    },
  },
  onSortingChange: updaterOrValue => {
    sorting.value =
      typeof updaterOrValue === 'function'
        ? updaterOrValue(sorting.value)
        : updaterOrValue
  },  
})
</script>

<template>
  <div class="bg-white rounded-sm shadow-sm">
    <div>
      <div class="overflow-auto">
        <!-- Table -->
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
            >
              <th
                v-for="header in headerGroup.headers"
                :key="header.id"
                scope="col"
                class="text-left text-sm font-semibold text-primary uppercase px-6 py-2"
                :class="{
                  'cursor-pointer select-none': header.column.getCanSort(),
                }"
                @click="header.column.getToggleSortingHandler()?.($event)"
              >
                <span class="flex items-center">
                  <FlexRender
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                  <IconAsc v-if="header.column.getCanSort() && header.column.getIsSorted() == 'asc'" class="w-3 h-3 ml-2 text-green-500"/>
                  <IconDesc v-else-if="header.column.getCanSort() && header.column.getIsSorted() == 'desc'" class="w-3 h-3 ml-2 text-green-500"/>
                  <IconDesc v-else-if="header.column.getCanSort()" class="w-3 h-3 ml-2 text-gray-400"/>
                </span>
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              class="text-gray-500 hover:bg-gray-100 hover:text-primary"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
                class="whitespace-nowrap text-md px-6 py-4"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="dataTable.length === 0">
          <p class="text-sm text-gray-700 p-2 text-center">Esta escola não possui prêmios</p>
        </div>
      </div>
    </div>
  </div>
</template>