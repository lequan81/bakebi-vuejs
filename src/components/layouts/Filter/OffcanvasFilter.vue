<script setup>
import { useId } from "vue";
import OffcanvasFilterItems from "./OffcanvasFilterItems.vue";
import { Offcanvas, Button } from "@components";

defineProps({
  name: {
    type: String,
    default: "OffcanvasFilter",
  },
  id: {
    type: String,
    default: undefined,
  },
  title: {
    type: String,
    required: true,
    default: "Bộ lọc tìm kiếm",
  },
  placements: {
    type: Object,
    default: { xAxis: "right", yAxis: "full" },
  },
  filterArrs: {
    type: [Array, Function],
    required: true,
    default: undefined,
  },
  resetFilter: {
    type: Function,
    required: true,
  },
});

const autoCreateId = useId();
</script>
<template>
  <Offcanvas
    :id="id !== undefined ? id : autoCreateId"
    :title="title"
    :placements="placements"
  >
    <div class="px-4 pt-4 space-y-8 flex-1 overflow-y-auto">
      <OffcanvasFilterItems
        v-for="(item, index) in filterArrs"
        :key="index"
        :title="item.title"
        :filters="item.filters"
        :selectedElm="item.selectedElm"
        :onSelect="item.onSelect"
      />
    </div>
    <div class="flex items-center gap-x-3 p-4">
      <Button type="secondary" @click="resetFilter">
        <span class="w-full font-medium text-sm sm:text-base">
          Thiết lập lại
        </span>
      </Button>
      <Button type="primary">
        <span class="w-full font-medium text-sm sm:text-base">Áp dụng</span>
      </Button>
    </div>
  </Offcanvas>
</template>
