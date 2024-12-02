<script setup>
import { PriceFormatter, CategoryFormatter, Button } from "@components";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { PRODUCTS_ID } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "CustomizeProductCard",
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  price: {
    type: [String, Number],
    required: true,
  },
  oldPrice: {
    type: [String, Number],
    default: 0,
  },
  category_id: {
    type: [String, Number],
    required: true,
  },
  product_id: {
    type: [String, Number],
    required: true,
  },
});
</script>

<template>
  <div
    class="group relative h-full flex items-center justify-center w-full sm:w-1/3 sm:p-4"
  >
    <div
      class="relative flex flex-row sm:flex-none sm:w-fit sm:min-w-96 sm:min-h-36 sm:p-4 sm:h-full bg-white transition-colors duration-300 ease-in-out rounded-md sm:pl-28 shadow-sm border border-gray-200"
    >
      <!-- Image overlay -->
      <div
        class="relative w-1/3 sm:absolute sm:-left-20 sm:-top-12 sm:size-fit sm:z-[2] shadow-sm brightness-95"
        aria-hidden="true"
      >
        <img
          :src="imgUrl"
          :alt="productName"
          class="size-full sm:size-44 shadow-lg sm:rounded aspect-square object-cover object-center rounded-l"
        />
      </div>
      <div class="flex-1 p-4 sm:p-0 sm:flex-none sm:w-full">
        <div
          class="flex sm:flex-row flex-col sm:w-full items-start justify-between mb-2 gap-2 sm:gap-0"
        >
          <h3 class="font-semibold text-base sm:text-lg">
            {{ productName }}
          </h3>
          <CategoryFormatter :category_id="category_id" />
        </div>
        <p class="text-gray-600 text-sm mb-2 line-clamp-3 order-2">
          {{
            description ||
            "Bánh ngọt hương vị ngọt ngào như nyc của bạn. Nhưng mà đâu có ngọt như nyc đâu nha, chỉ là một câu quảng cáo thôi mà. À mà quên mất, bạn làm gì có mối tình đầu!"
          }}
        </p>

        <PriceFormatter :price="price" :oldPrice="oldPrice" :isSm="true" />
        <div class="flex flex-row justify-between items-center gap-x-3 mt-4">
          <router-link
            :to="`/products/${PRODUCTS_ID[category_id].category}/${product_id}`"
          >
            <Button
              type="secondary"
              btnClass="px-2 sm:px-6 py-1.5 sm:py-2 rounded-full w-full"
              bgClass="border-black bg-white hover:bg-gray-50"
            >
              <span class="font-medium text-xs sm:text-sm">
                Tìm hiểu thêm
              </span>
            </Button>
          </router-link>
          <Button
            type="secondary"
            :icon="ShoppingCartIcon"
            btnClass="p-1.5 md:p-2 rounded-md"
            iconClass="size-4 md:size-5 text-gray-800"
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>
