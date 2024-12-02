<script setup>
import { onMounted, ref } from "vue";
import { HSInputNumber } from "preline";
import { Button } from "@components";
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

defineProps({
  name: {
    type: String,
    default: "BtnGroup",
  },
});

onMounted(() => {
  HSInputNumber.autoInit();
});

const selectedSize = ref("XS");
const selectedTag = ref("Cay của Thần đằng");

const selectSize = (size) => {
  selectedSize.value = selectedSize.value === size ? null : size;
};

const selectTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? null : tag;
};
</script>

<template>
  <div class="space-y-4 sm:space-y-6">
    <!-- Tags -->
    <div class="flex flex-col gap-y-3 justify-center items-start">
      <span class="text-sm font-semibold">Tùy chọn thêm</span>
      <div class="flex flex-wrap gap-2.5 pr-0.5">
        <Button
          v-for="tag in [
            'Cay của Thần đằng',
            'Đắng khiến bạn mê',
            'Mất Ngọt',
            'Cao hơn trời',
            'Giòn rộp rộp',
            'Mặn mòi quyến rũ',
            'Chua nhỏ dãi',
            'Phê tụt lưỡi',
            'Người đến sau',
          ]"
          :key="tag"
          type="secondary"
          btnClass="px-3 py-1 shadow-sm border rounded-full"
          :bgClass="`hover:border-gray-500 hover:bg-gray-50 ${
            selectedTag === tag
              ? 'bg-gray-100 border-gray-400'
              : 'bg-white border-gray-200'
          }`"
          @click="selectTag(tag)"
        >
          <span
            :class="`text-sm w-full mx-auto ${
              selectedTag === tag
                ? 'text-black font-medium'
                : 'text-900 font-normal'
            }`"
          >
            {{ tag }}
          </span>
        </Button>
      </div>
    </div>
    <!-- Size Selection -->
    <div
      class="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-4 justify-center sm:justify-start items-start sm:items-center"
    >
      <span class="text-sm font-semibold">Kích thước</span>
      <div class="flex gap-x-3">
        <Button
          v-for="size in ['XS', 'SS', 'S', 'M', 'L', 'LL', 'XXL']"
          :key="size"
          type="secondary"
          btnClass="size-8 sm:size-9 rounded-full shadow-sm"
          :bgClass="`hover:border-gray-500 hover:bg-gray-50 ${
            selectedSize === size
              ? 'bg-gray-100 border-gray-400'
              : 'bg-white border-gray-200'
          }`"
          @click="selectSize(size)"
        >
          <span
            :class="`text-sm w-full mx-auto ${
              selectedSize === size
                ? 'text-black font-medium'
                : 'text-900 font-normal'
            }`"
          >
            {{ size }}
          </span>
        </Button>
      </div>
    </div>
    <!-- Quantity Btn -->
    <div
      class="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:gap-x-4 justify-center sm:justify-start items-start sm:items-center"
    >
      <span class="text-sm font-semibold">Số lượng</span>
      <div
        class="inline-flex items-center rounded sm:rounded-lg bg-white border border-gray-200 shadow-sm"
        data-hs-input-number='{
          "max": 9999,
          "min": 1
        }'
      >
        <!-- Decrease button -->
        <button
          class="size-6 sm:size-7 flex items-center justify-center text-gray-800 bg-white hover:bg-gray-50 rounded-l sm:rounded-l-md transition-colors focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          tabindex="-1"
          aria-label="Decrease"
          data-hs-input-number-decrement=""
        >
          <span class="sr-only">Decrease quantity</span>
          <MinusIcon
            class="shrink-0 size-3.5 sm:size-4"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </button>

        <!-- Quantity input -->
        <input
          class="w-8 sm:w-10 text-sm border-x text-center bg-transparent focus:outline-none focus:ring-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          style="appearance: textfield; -moz-appearance: textfield"
          type="number"
          aria-roledescription="Number field"
          data-hs-input-number-input=""
        />

        <!-- Increase button -->
        <button
          class="size-6 sm:size-7 flex items-center justify-center text-gray-800 bg-white hover:bg-gray-50 rounded-r sm:rounded-r-md transition-colors focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          tabindex="-1"
          aria-label="Increase"
          data-hs-input-number-increment=""
        >
          <span class="sr-only">Increase quantity</span>
          <PlusIcon
            class="shrink-0 size-3.5 sm:size-4"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </button>
      </div>
    </div>
    <div class="flex items-center gap-x-3 pt-4 sm:pt-6">
      <Button type="secondary">
        <span class="w-full font-medium text-sm sm:text-base">
          Thêm vào giỏ hàng
        </span>
      </Button>
      <Button type="primary">
        <span class="w-full font-medium text-sm sm:text-base">Mua ngay</span>
      </Button>
    </div>
  </div>
</template>
