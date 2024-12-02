<script setup>
import { computed, ref, isRef } from "vue";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "OffcanvasFilterItems",
  },
  title: {
    type: String,
    required: true,
  },
  filters: {
    type: Array,
    required: true,
    default: () => [],
  },
  selectedElm: {
    type: [Array, String, Object],
    required: true,
  },
  onSelect: {
    type: Function,
    required: true,
  },
});

const showMore = ref(false);

const showMoreToggle = () => {
  showMore.value = !showMore.value;
};

const showMoreItems = computed(() =>
  props.filters.length > 4 ? props.filters.slice(4) : []
);

const defaultItems = computed(() =>
  props.filters.length > 4 ? props.filters.slice(0, 4) : props.filters
);

const isSelected = (filter) => {
  const selectedValue = isRef(props.selectedElm)
    ? props.selectedElm.value
    : props.selectedElm;

  if (Array.isArray(selectedValue)) {
    return selectedValue.includes(filter);
  } else if (typeof selectedValue === "string") {
    return selectedValue === filter.value;
  } else if (typeof selectedValue === "object" && selectedValue !== null) {
    return selectedValue.value === filter || selectedValue === filter;
  }
  return false;
};
</script>

<template>
  <div
    :class="`flex flex-col gap-y-3 justify-center items-start border-b border-gray-200 ${
      props.filters.length > 4 ? 'pb-0.5' : 'pb-4'
    }`"
  >
    <span class="text-sm font-semibold">{{ title }}</span>
    <div class="grid grid-cols-2 gap-3 w-full">
      <!-- Default items -->
      <button
        v-for="filter in defaultItems"
        :key="filter"
        :class="`px-3 py-1 shadow-sm border rounded text-sm hover:border-gray-500 hover:bg-gray-50 transition-colors inline-flex items-center justify-between ${
          isSelected(filter)
            ? 'bg-gray-100 border-gray-400'
            : 'bg-white border-gray-200'
        }`"
        @click="onSelect(filter)"
      >
        <span
          :class="`text-sm text-left ${
            isSelected(filter)
              ? 'text-black font-medium me-2'
              : 'text-900 font-normal me-4'
          }`"
        >
          {{ filter.title || filter }}
        </span>
        <CheckIcon
          v-if="isSelected(filter)"
          class="size-3 text-blue-500"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </button>

      <!-- Show more items -->
      <template v-if="showMore">
        <button
          v-for="filter in showMoreItems"
          :key="filter"
          :class="`px-3 py-1 shadow-sm border rounded text-sm hover:border-gray-500 hover:bg-gray-50 transition-all inline-flex items-center justify-between opacity-100 translate-y-0 ${
            isSelected(filter)
              ? 'bg-gray-100 border-gray-400'
              : 'bg-white border-gray-200'
          }`"
          @click="onSelect(filter)"
        >
          <span
            :class="`text-sm text-left ${
              isSelected(filter)
                ? 'text-black font-medium me-2'
                : 'text-900 font-normal me-4'
            }`"
          >
            {{ filter.title || filter }}
          </span>
          <CheckIcon
            v-if="isSelected(filter)"
            class="size-3 text-blue-500"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </button>
      </template>
    </div>

    <button
      v-if="props.filters.length > 4"
      class="flex items-center justify-center w-full px-4 py-2 gap-x-1"
      @click="showMoreToggle"
    >
      <span class="text-xs font-medium text-gray-800">
        {{ showMore ? "Thu gọn" : "Xem thêm" }}
      </span>
      <component
        :is="showMore ? ChevronUpIcon : ChevronDownIcon"
        class="shrink-0 size-2.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </button>
  </div>
</template>
