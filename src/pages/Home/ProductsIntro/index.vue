<script>
import { ProductCard } from "@components";

export default {
  name: "ProductsIntro",
  components: {
    ProductCard,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    href: {
      type: String,
      required: true,
    },
    productDatas: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<template>
  <div class="w-full px-4 py-6 sm:py-12 mx-auto">
    <div class="max-w-2xl text-center mx-auto mb-6 lg:mb-12">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">
        {{ title }}
      </h2>
      <p class="mt-1 text-gray-600">
        {{ description }}
      </p>
    </div>

    <div
      class="flex flex-row overflow-auto items-center justify-evenly gap-4 sm:gap-6 mb-8 sm:mb-10"
    >
      <template
        v-for="(product, index) in productDatas.slice(0, 4)"
        :key="index"
      >
        <ProductCard
          :name="product.name"
          :imgUrl="product.imgUrl"
          :price="product.price"
          :oldPrice="product.oldPrice"
          :category_id="product.category_id"
          :product_id="product.product_id"
        />
      </template>
    </div>
    <div class="text-center">
      <router-link
        :to="href"
        class="text-black px-4 py-1.5 sm:px-12 sm:py-2 rounded-full font-semibold text-base sm:text-lg border border-black hover:bg-gray-100 transition w-fit"
      >
        Xem tất cả
      </router-link>
    </div>
  </div>
</template>
