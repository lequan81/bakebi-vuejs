<script setup>
import { onMounted } from "vue";
import { HSAccordion } from "preline";
import AccordionItem from "./AccordionItem.vue";
import { Button, Checkbox } from "@components";
import {
  AdjustmentsHorizontalIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "ProductsFilter",
  },
  filters: {
    type: Array,
    default: undefined,
  },
  resetFilter: {
    type: Function,
    default: undefined,
  },
  isResetable: {
    type: Boolean,
    default: false,
  },
});

onMounted(() => {
  HSAccordion.autoInit();
});
</script>

<template>
  <!-- Header -->
  <div
    class="text-gray-900 flex flex-row items-center gap-x-2 border-b px-4 pb-2 pt-3 border-gray-400 shadow-sm"
  >
    <AdjustmentsHorizontalIcon
      class="mr-1 size-4 xl:size-5 shrink-0"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <span class="text-base font-semibold text-gray-900 grow">
      Bộ lọc nâng cao
    </span>
    <Button
      v-if="isResetable"
      type="secondary"
      btnClass="text-sm text-sm font-medium text-blue-500 hover:underline underline-offset-2 cursor-pointer w-fit border-none"
      bgClass="bg-white"
      @click="resetFilter"
    >
      Đặt lại
    </Button>
  </div>

  <!-- Filter Sections -->
  <div
    class="overflow-y-auto flex-1 mb-4 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300"
  >
    <div class="hs-accordion-group px-4 pt-2" data-hs-accordion-always-open="">
      <template v-for="item in filters" :key="item">
        <AccordionItem
          :title="item.title"
          :isInitOpen="item.isInitOpen"
          :textClasses="item.textClasses"
        >
          <div class="w-full px-2 flex flex-col gap-y-2">
            <Button
              v-if="item.type === 'button'"
              v-for="filter in item.filters"
              :key="filter"
              type="secondary"
              btnClass="py-2 px-3 sm:px-4 rounded shadow-sm w-full inline-flex items-center justify-between"
              :bgClass="`hover:border-gray-500 hover:bg-gray-50 ${
                item.selectedElm === filter.value
                  ? 'bg-gray-100 border-gray-400'
                  : 'bg-white border-gray-200'
              }`"
              @click="item.onSelect(filter.value)"
            >
              <span
                :class="`text-sm ${
                  item.selectedElm === filter.value
                    ? 'text-black font-medium pe-0'
                    : 'text-900 font-normal pe-8'
                }`"
              >
                {{ filter.title }}
              </span>
              <CheckIcon
                v-if="item.selectedElm === filter.value"
                class="shrink-0 size-4 text-blue-600"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Button>
            <Checkbox
              v-if="item.type === 'checkbox'"
              v-for="filter in item.filters"
              :key="filter"
              :label="filter"
              :value="filter"
              :checked="Object.values(item.selectedElm).includes(filter)"
              @change="item.onSelect(filter)"
            >
              <span
                :class="`text-sm ${
                  Object.values(item.selectedElm).includes(filter)
                    ? 'text-black font-medium'
                    : 'text-900 font-normal'
                }`"
              >
                {{ filter }}
              </span>
            </Checkbox>
          </div>
        </AccordionItem>
      </template>
    </div>
  </div>
</template>
