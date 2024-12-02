<script setup>
import { Pagination, ProductCard } from "@components";
import InforHeading from "./InforHeading.vue";
defineProps({
  name: {
    type: String,
    default: "ProductsList",
  },
  title: {
    type: String,
    default: "Danh sách sản phẩm",
  },
  currentPage: {
    type: Number,
  },
  products: {
    type: Array,
    required: true,
  },
  productsPerPage: {
    type: Number,
    default: 12,
  },
});
</script>

<template>
  <div class="flex flex-col gap-y-2 md:gap-y-4 w-full">
    <!-- Heading and filter btn -->
    <InforHeading :title="title" :totalProducts="products.length" />
    <!-- Products Grid -->

    <div
      class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5 grow size-full overflow-y-auto p-1"
    >
      <ProductCard
        v-for="(product, index) in products.slice(
          currentPage === 1 ? 0 : (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )"
        :key="index"
        :productName="product.name"
        :rating="product.rating"
        :imgUrl="product.imgUrl"
        :price="product.price"
        :oldPrice="product.oldPrice"
        :category_id="product.category_id"
        :product_id="product.product_id"
        priceClasses="max-w-36 h-12 sm:h-fit flex-wrap sm:flex-nowrap"
      />
    </div>
    <!-- Pagination -->
    <Pagination
      :totalPages="Math.ceil((products?.length || 0) / productsPerPage)"
      :currentPage="currentPage"
      :maxVisiblePages="10"
    />
  </div>
</template>
