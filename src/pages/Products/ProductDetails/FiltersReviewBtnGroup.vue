<script setup>
import { onMounted } from "vue";
import { HSSelect } from "preline";
import { SelectBtn, Button } from "@components";
import { AdjustmentsVerticalIcon } from "@heroicons/vue/24/outline";
import { StarIcon } from "@heroicons/vue/24/solid";
import { DEFAULT_FILTER, STARS_FILTER } from "@utils/constants";
import { iconToString } from "@/utils/iconUtils";

defineProps({
  name: {
    type: String,
    default: "FiltersReviewBtnGroup",
  },
  reviewsLength: {
    type: Number,
    required: true,
  },
});

const starIconSVG = iconToString(
  StarIcon,
  "shrink-0 size-3.5 text-yellow-400",
  'data-slot="icon"'
);
const HSSelectOption = JSON.stringify({ icon: starIconSVG });

onMounted(() => {
  HSSelect.autoInit();
});
</script>
<template>
  <div class="flex flex-row items-center gap-x-4 flex-1 justify-end">
    <template v-if="reviewsLength > 0">
      <SelectBtn
        label="Sắp xếp theo: "
        placeholder="Tất cả"
        btnClass="ps-8 py-2 text-sm flex flex-row items-center gap-x-2 w-full bg-gray-50 rounded-md shadow-sm"
        wrapperClass="w-32 hidden md:block"
        :options="DEFAULT_FILTER"
      />

      <SelectBtn
        label="Đánh giá: "
        placeholder="Tất cả"
        btnClass="ps-8 py-2 text-sm flex flex-row items-center gap-x-2 w-full bg-gray-50 rounded-md shadow-sm"
        wrapperClass="w-32 hidden md:block"
        :placeholderIcon="StarIcon"
        placeholderIconClass="shrink-0 size-3.5 text-yellow-400"
      >
        <option
          v-for="(option, index) in STARS_FILTER"
          :key="index"
          :value="option.value"
          :data-hs-select-option="HSSelectOption"
        >
          {{ option.title }}
        </option>
      </SelectBtn>
    </template>

    <!-- Offcanvas Btn -->
    <Button
      type="secondary"
      btnClass="sm:hidden rounded-full p-2 shadow-sm"
      bgClass="bg-gray-50 border-gray-100 hover:bg-gray-50 focus:bg-gray-50"
      :icon="AdjustmentsVerticalIcon"
      iconClass="shrink-0 size-4"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="hs-offcanvas-more-options"
      data-hs-overlay="#hs-offcanvas-more-options"
    >
    </Button>

    <Button type="primary" btnClass="py-2 px-3 sm:px-4 rounded-md shadow-sm">
      <span class="text-white text-xs sm:text-sm font-medium">
        Viết đánh giá
      </span>
    </Button>
  </div>
</template>
