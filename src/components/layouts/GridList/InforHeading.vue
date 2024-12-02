<script setup>
import { SelectBtn, Button } from "@components";
import { DEFAULT_FILTER } from "@utils/constants";
import {
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/vue/24/outline";

defineProps({
  name: {
    type: String,
    default: "InforHeading",
  },
  title: {
    type: String,
    required: true,
  },
  totalProducts: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="flex flex-row justify-between items-center w-full h-9">
    <h3 class="text-sm md:text-lg font-semibold text-gray-900">
      {{ title }}
    </h3>
    <div class="flex flex-row items-center justify-between gap-x-2">
      <p class="text-gray-600 text-xs md:text-sm">
        <span class="font-semibold tabular-nums text-gray-900">{{
          totalProducts
        }}</span>
        sản phẩm
      </p>
      <div class="w-px h-4 bg-gray-300 block"></div>
      <SelectBtn
        label="Sắp xếp theo:"
        placeholder="Tất cả"
        btnClass="pe-8 py-2 text-sm flex flex-row items-center gap-x-2 w-full min-w-max border-none"
        wrapperClass="w-full hidden md:block"
        :options="DEFAULT_FILTER"
        :placeholderIcon="null"
        :icon="ChevronDownIcon"
        :placements="{ xAxis: 'right', yAxis: 'bottom' }"
      />
      <Button
        type="secondary"
        btnClass="sm:hidden rounded-full p-2 shadow-sm"
        bgClass="bg-gray-50 border-gray-100 hover:bg-gray-50 focus:bg-gray-50"
        :icon="AdjustmentsVerticalIcon"
        iconClass="shrink-0 size-4"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-filters-options"
        data-hs-overlay="#hs-offcanvas-filters-options"
      >
      </Button>
    </div>
  </div>
</template>
