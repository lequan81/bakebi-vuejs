<script setup>
import { onMounted } from "vue";
import { ProductsList, ProductsFilter } from "@components";
import { DEMO_ALL_PRODUCTS } from "@utils/constants";

const props = defineProps({
  name: {
    type: String,
    default: "Trending",
  },
  page: {
    type: Number,
    default: 1,
  },
});

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<template>
  <div class="size-full flex-1 bg-white pb-20">
    <div
      class="flex flex-col flex-nowrap gap-6 w-full mx-auto py-4 sm:py-8 px-4 sm:px-8 space-y-6"
    >
      <!-- Title -->
      <h1 class="text-3xl font-bold mb-4 sm:mb-0 mx-auto">Sản phẩm bán chạy</h1>

      <div class="w-full flex flex-row gap-x-6">
        <!-- Filter Sidebar -->
        <div class="w-1/5">
          <div
            class="sticky top-20 border border-gray-300 bg-white rounded-lg max-h-[calc(100vh-6rem)] flex flex-col shadow-md"
          >
            <ProductsFilter
              :isCategoryId="false"
              :products="DEMO_ALL_PRODUCTS.products"
            />
          </div>
        </div>

        <div class="w-4/5">
          <ProductsList
            :products="DEMO_ALL_PRODUCTS.products"
            :productsPerPage="12"
            :currentPage="page"
          />
        </div>
      </div>
    </div>
  </div>
</template>
