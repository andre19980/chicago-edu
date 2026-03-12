<script setup lang="ts">
import { ref } from "vue";
import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  createColumnHelper,
  type SortingState,
} from "@tanstack/vue-table";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue";
import IconDoubleArrowLeft from "@/components/icons/IconDoubleArrowLeft.vue";
import IconArrowRight from "@/components/icons/IconArrowRight.vue";
import IconDoubleArrowRight from "@/components/icons/IconDoubleArrowRight.vue";
import IconAsc from "@/components/icons/IconAsc.vue";
import IconDesc from "@/components/icons/IconDesc.vue";

import { type SchoolTable } from "@/types/Schools";

import { formatUSPhoneNumber } from "@/utils/formatters/formatters";
import { SchoolTypesLabels } from "@/utils/mappers/schools";

const props = defineProps<{
  data: SchoolTable[]
}>()

const selected = ref("10");
const columnHelper = createColumnHelper<SchoolTable>();

const columns = [
  columnHelper.accessor("schoolId", {
    header: () => "ID",
    footer: props => props.column.id,
    enableSorting: false,
  }),
  columnHelper.accessor("shortName", {
    header: () => "Nome",
    footer: props => props.column.id,
  }),
  columnHelper.accessor("phone", {
    header: () => "Contato",
    footer: props => props.column.id,
    enableSorting: false,
    cell: data => formatUSPhoneNumber(data.getValue()) 
  }),
  columnHelper.accessor("schoolType", {
    header: () => "Tipo de Escola",
    footer: props => props.column.id,
    enableSorting: false,
    cell: data => SchoolTypesLabels[data.getValue()]
  }),
  columnHelper.accessor("primaryCategory", {
    header: () => "Categoria",
    footer: props => props.column.id,
    enableSorting: false,
  }),
  columnHelper.accessor("website.url", {
    header: () => "Site",
    footer: props => props.column.id,
    enableSorting: false,
  }),
]

const data = ref(props.data)

const sorting = ref<SortingState>([])
const filter = ref('')

const table = useVueTable({
  data: data.value,
  columns: columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value
    },
    get globalFilter() {
      return filter.value
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
      <div>
        <!-- Search input -->
        <div class="p-6">
          <input
            type="text"
            class="border border-gray-400 rounded px-2 py-2 w-96"
            placeholder="Pesquisar"
            v-model="filter"
          />
        </div>

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

        <!-- Pagination -->
        <div class="relative flex">
          <div class="flex flex-1 text-gray-500 p-6 text-sm justify-center">
            Página {{ table.getState().pagination.pageIndex + 1 }} de
            {{ table.getPageCount() }} -
            {{ table.getFilteredRowModel().rows.length }} resultados
          </div>

          <div class="absolute top-6 left-6 text-sm">
            <select
              v-model="selected"
              @change="table.setPageSize(parseInt(selected))"
              class="w-16 p-1 border-b border-gray-700 focus:outline-none focus:border-b-2 focus:border-green-500 focus:ring-0"
            >
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Page Index Controllers -->
      <div class="flex flex-row justify-end gap-4 p-6">
        <button
          class="rounded border border-gray-400 text-primary p-1 disabled:cursor-not-allowed disabled:hover:text-gray-600 disabled:bg-gray-200 disabled:opacity-50 hover:bg-gray-200 hover:text-green-500 hover:cursor-pointer"
          @click="table.setPageIndex(0)"
        >
          <IconDoubleArrowLeft />
        </button>
        <button
          class="rounded border border-gray-400 text-primary p-1 disabled:cursor-not-allowed disabled:hover:text-gray-600 disabled:bg-gray-200 disabled:opacity-50 hover:bg-gray-200 hover:text-green-500 hover:cursor-pointer"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <IconArrowLeft />
        </button>
        <button
          class="rounded border border-gray-400 text-primary p-1 disabled:cursor-not-allowed disabled:hover:text-gray-600 disabled:bg-gray-200 disabled:opacity-50 hover:bg-gray-200 hover:text-green-500 hover:cursor-pointer"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <IconArrowRight />
        </button>
        <button
          class="rounded border border-gray-400 text-primary p-1 disabled:cursor-not-allowed disabled:hover:text-gray-600 disabled:bg-gray-200 disabled:opacity-50 hover:bg-gray-200 hover:text-green-500 hover:cursor-pointer"
          @click="table.setPageIndex(table.getPageCount() - 1)"
        >
          <IconDoubleArrowRight />
        </button>
      </div>
    </div>
  </div>
</template>