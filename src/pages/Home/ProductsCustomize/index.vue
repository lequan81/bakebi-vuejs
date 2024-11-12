<script>
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { PRODUCTS_ID } from "@utils/constants";
export default {
  name: "ProductsCustomize",
  components: {
    ShoppingCartIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    productsArray: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      PRODUCTS_ID,
    };
  },
};
</script>

<template>
  <div class="w-full px-4 py-12 mx-auto bg-orange-50">
    <div class="max-w-2xl text-center mx-auto mb-8 lg:mb-12">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
        {{ title }}
      </h2>
      <p class="mt-1 text-gray-600">
        {{ description }}
      </p>
    </div>

    <div
      class="flex items-center justify-evenly flex-wrap gap-y-12 sm:gap-y-28 px-0 sm:px-6 sm:gap-x-6 sm:mt-20 sm:mb-12"
    >
      <template
        v-for="(product, index) in productsArray.slice(0, 4)"
        :key="index"
      >
        <div
          class="group relative h-full flex items-center justify-center w-full sm:w-1/3 sm:p-4"
        >
          <div
            class="relative flex flex-row sm:flex-none sm:w-fit sm:min-w-96 sm:min-h-36 sm:p-4 sm:h-full bg-white transition-colors duration-200 rounded-md sm:pl-28 shadow-sm border border-gray-200"
          >
            <!-- Image overlay -->
            <div
              class="relative w-1/3 sm:absolute sm:-left-20 sm:-top-12 sm:size-fit sm:z-[2] shadow-sm brightness-95"
              aria-hidden="true"
            >
              <img
                :src="product.imgUrl"
                :alt="product.name"
                class="size-full sm:size-44 shadow-lg sm:rounded aspect-square object-cover object-center rounded-l"
              />
            </div>
            <div class="flex-1 p-4 sm:p-0 sm:flex-none sm:w-full">
              <div
                class="flex sm:flex-row flex-col sm:w-full items-start justify-between mb-2 gap-2 sm:gap-0"
              >
                <h3 class="font-semibold text-base sm:text-lg">
                  {{ product.name }}
                </h3>
                <span
                  v-if="product.category_id !== undefined"
                  :class="`rounded py-0.5 px-1.5 text-xs sm:text-sm font-semibold ${
                    product.category_id === 0
                      ? 'bg-red-100 text-red-600'
                      : 'bg-orange-100 text-orange-600'
                  }`"
                >
                  {{ PRODUCTS_ID[product.category_id].name }}
                </span>
              </div>
              <p
                class="text-gray-600 text-sm mb-2 line-clamp-2 md:line-clamp-3 order-2"
              >
                {{
                  product.description ||
                  "Bánh ngọt hương vị ngọt ngào như nyc của bạn. Nhưng mà đâu có ngọt như nyc đâu nha, chỉ là một câu quảng cáo thôi mà. À mà quên mất, bạn làm gì có mối tình đầu!"
                }}
              </p>

              <p class="font-bold text-sm md:text-base">
                {{
                  new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(Number(product.price))
                }}
              </p>
              <div class="flex items-center gap-x-3 mt-4">
                <router-link
                  :to="`/products/${
                    PRODUCTS_ID[product.category_id].category
                  }/${product.product_id}`"
                  class="text-black px-4 sm:px-6 py-1.5 am:py-2 rounded-full font-medium text-xs sm:text-sm border border-black bg-white hover:bg-gray-50 transition w-fit"
                >
                  Tìm hiểu thêm
                </router-link>
                <button
                  class="p-1.5 md:p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <ShoppingCartIcon class="size-4 md:size-5 text-gray-700" />
                </button>
              </div>
            </div>

            <!-- <div class="flex flex-row w-full items-center justify-between mb-2">
              <h3 class="font-semibold text-lg">{{ product.name }}</h3>
              <span
                v-if="product.category_id !== undefined"
                :class="`rounded py-0.5 px-1.5 text-sm font-semibold ml-auto ${
                  product.category_id === 0
                    ? 'bg-red-100 text-red-600'
                    : 'bg-orange-100 text-orange-600'
                }`"
              >
                {{ PRODUCTS_ID[product.category_id].name }}
              </span>
            </div>
            <p class="text-gray-600 text-sm mb-3">
              {{
                product.description ||
                "Bánh ngọt hương vị ngọt ngào như nyc của bạn"
              }}
            </p>
            <p class="font-bold">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(Number(product.price))
              }}
            </p>
            <div class="flex items-center gap-x-3 mt-4">
              <router-link
                :to="`/products/${PRODUCTS_ID[product.category_id].category}/${
                  product.product_id
                }`"
                class="text-black px-6 py-2 rounded-full font-medium text-sm border border-black bg-white hover:bg-gray-50 transition w-fit"
              >
                Tìm hiểu thêm
              </router-link>
              <button
                class="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                <ShoppingCartIcon
                  class="size-5 text-gray-700"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </button>
            </div> -->
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
