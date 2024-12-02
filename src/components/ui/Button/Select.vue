<script setup>
import { computed, useId } from "vue";
import { iconToString } from "@/utils/iconUtils";
import {
  ChevronUpDownIcon,
  FunnelIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "SelectBtn",
  },
  label: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: "Filter",
  },
  options: {
    type: Array,
    default: undefined,
  },
  placeholderIcon: {
    type: [Object, Function],
    default: FunnelIcon,
  },
  icon: {
    type: [Object, Function],
    default: ChevronUpDownIcon,
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
  iconClass: {
    type: String,
    default: undefined,
  },
  placeholderIconClass: {
    type: String,
    default: undefined,
  },
  btnClass: {
    type: String,
    default: undefined,
  },
  wrapperClass: {
    type: String,
    default: "",
  },
  placements: {
    type: Object,
    default: { xAxis: "left", yAxis: "bottom" },
  },
});

const id = useId();

const dataHSSelect = computed(() => {
  const extraMarkup = [];
  const { xAxis, yAxis } = props.placements;

  const dropdownPlacementClasses = {
    left: "origin-top-left left-0",
    right: "origin-top-right right-0",
    center: "origin-top-center left-1/2 -translate-x-1/2",
  };

  const iconSVG =
    props.icon !== null ? iconToString(props.icon, props.iconClass) : null;
  const placeholderSVG = props.placeholderIcon
    ? iconToString(props.placeholderIcon, props.placeholderIconClass)
    : null;
  const optionIconSVG = iconToString(
    CheckIcon,
    "shrink-0 size-3.5 text-blue-600"
  );

  if (iconSVG !== null) {
    extraMarkup.push(
      `<div class="absolute top-1/2 end-3 -translate-y-1/2">${iconSVG}</div>`
    );
  }
  if (placeholderSVG !== null) {
    extraMarkup.push(
      `<div class="absolute top-1/2 start-3 -translate-y-1/2">${placeholderSVG}</div>`
    );
  }

  const HSSelectConfig = {
    dropdownVerticalFixedPlacement: yAxis,
    wrapperClasses: `${
      props.wrapperClass
        ? `hs-select relative ${props.wrapperClass}`
        : "hs-select relative"
    }`,
    placeholder: `${props.placeholder}`,
    toggleTag: `<button type="button" aria-expanded="false"></button>`,
    toggleClasses: `hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative cursor-pointer focus:outline-none border font-semibold flex gap-x-2 text-nowrap text-start ${
      props.btnClass ||
      "shadow-sm px-8 py-3 w-full border-gray-200 rounded-lg text-sm"
    }`,
    dropdownClasses: `mt-2 absolute z-[2] max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto transition-all before:scale-y-0 scale-y-100 before:opacity-0 opacity-100 ease-in-out duration-75 transform [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ${dropdownPlacementClasses[xAxis]}`,
    optionClasses:
      "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100",
    optionTemplate: `
    <div class="flex flex-row justify-between items-center w-full gap-x-4 flex-wrap min-w-max">
      <div class="flex flex-row items-center justify-between gap-x-2">
        <div data-icon></div>
        <span class="pe-8 hs-selected:pe-0" data-title></span>
      </div>
      <span class="hidden hs-selected:block">
        ${optionIconSVG}
      </span>
    </div>`,
    extraMarkup: extraMarkup,
  };

  return JSON.stringify(HSSelectConfig);
});
</script>

<template>
  <div class="relative inline-flex items-center">
    <span
      v-if="label"
      class="text-sm text-gray-800 me-3 hidden sm:inline-block whitespace-nowrap"
      >{{ label }}</span
    >
    <select
      :id="id"
      :data-hs-select="dataHSSelect"
      class="hidden"
      :multiple="isMultiple"
    >
      <option
        v-if="options !== undefined"
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.title }}
      </option>
      <slot v-else></slot>
    </select>
  </div>
</template>
