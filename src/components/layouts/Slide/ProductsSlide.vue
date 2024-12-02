<script setup>
import { ProductCard, CustomizeProductCard, Button } from "@components";

defineProps({
  name: {
    type: String,
    default: "ProductsSlide",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  href: {
    type: String,
    default: undefined,
  },
  products: {
    type: Array,
    required: true,
    default: undefined,
  },
  isCustomize: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="`w-full px-4 mx-auto ${
      isCustomize ? 'bg-orange-50 py-12' : 'py-6 sm:py-12'
    }`"
  >
    <div
      :class="`max-w-2xl text-center mx-auto lg:mb-10 ${
        isCustomize ? 'mb-8' : 'mb-6'
      }`"
    >
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
        {{ title }}
      </h2>
      <p class="mt-1 text-gray-600">
        {{ description }}
      </p>
    </div>

    <div
      :class="`flex items-center justify-center ${
        isCustomize
          ? 'justify-evenly flex-wrap gap-y-12 sm:gap-y-28 px-0 sm:px-6 sm:gap-x-6 sm:mt-20 sm:mb-12'
          : 'flex-row flex-nowrap overflow-x-auto size-full gap-y-2 md:gap-x-4 xl:gap-x-6 mb-6 sm:mb-8 xl:mb-10 p-1 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300'
      }`"
    >
      <template v-if="isCustomize">
        <CustomizeProductCard
          v-for="(product, index) in products.slice(0, 4)"
          :key="index"
          :productName="product.name"
          :description="product.description"
          :imgUrl="product.imgUrl"
          :price="product.price"
          :oldPrice="product.oldPrice"
          :category_id="product.category_id"
          :product_id="product.product_id"
        />
      </template>
      <template v-else>
        <ProductCard
          v-for="(product, index) in products.slice(0, 4)"
          :key="index"
          :productName="product.name"
          :rating="product.rating"
          :imgUrl="product.imgUrl"
          :price="product.price"
          :oldPrice="product.oldPrice"
          :category_id="product.category_id"
          :product_id="product.product_id"
        />
      </template>
    </div>

    <router-link
      v-if="!isCustomize && href !== undefined"
      :to="`${href || '#'}`"
    >
      <Button
        type="secondary"
        btnClass="px-4 py-1.5 sm:px-12 sm:py-2 rounded-full w-fit mx-auto"
        bgClass="border border-black hover:bg-gray-100"
      >
        <span class="w-full font-medium text-sm sm:text-base">
          Xem tất cả
        </span>
      </Button>
    </router-link>
  </div>
</template>
