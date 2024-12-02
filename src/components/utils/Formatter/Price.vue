<script setup>
import { computed } from "vue";

const props = defineProps({
  price: {
    type: [String, Number],
    required: true,
  },
  oldPrice: {
    type: [String, Number],
    default: undefined,
  },
  isSm: {
    type: Boolean,
    default: false,
  },
  wrapperClasses: {
    type: String,
    default: "",
  },
});

const formatCurrency = computed(() => {
  return function (price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(Number(price));
  };
});

const priceDiff = computed(() => {
  if (Number(props.oldPrice) === NaN) return 0;
  // for negative priceDiff
  return Math.round(
    ((Number(props.price) - Number(props.oldPrice)) / Number(props.oldPrice)) *
      100
  );
  /**
   *! for positive priceDiff
   ** return Math.round(((Number(props.oldPrice) - Number(props.price)) / Number(props.oldPrice)) * 100);
   */
});
</script>

<template>
  <div :class="`flex flex-row items-baseline gap-x-4 pt-1.5 ${wrapperClasses}`">
    <span
      :class="`tabular-nums font-bold text-base ${
        isSm ? 'sm:text-lg' : 'sm:text-xl'
      }`"
    >
      {{ formatCurrency(price) }}
    </span>
    <span
      v-if="priceDiff !== Infinity"
      class="tabular-nums text-gray-500 line-through text-xs sm:text-sm"
      >{{ formatCurrency(oldPrice) }}</span
    >
    <span
      v-if="priceDiff !== Infinity"
      :class="`tabular-nums rounded py-0.5 px-1.5 text-xs sm:text-sm font-semibold ml-auto ${
        priceDiff < 0 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-red-700'
      }`"
    >
      {{ priceDiff }}%
    </span>
  </div>
</template>
