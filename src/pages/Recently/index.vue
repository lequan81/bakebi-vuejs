<script setup>
import { onMounted } from "vue";
import { ProductsList, ProductsFilter } from "@components";
import { DEMO_ALL_PRODUCTS } from "@utils/constants";

const props = defineProps({
  name: {
    type: String,
    default: "Recently",
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
  <div class="size-full flex-1 flex-col bg-white sm:pb-20 pb-32">
    <div
      class="flex flex-col flex-nowrap gap-2 lg:gap-4 xl:gap-6 w-full mx-auto py-4 sm:py-8 px-4 sm:px-8"
    >
      <!-- Title -->
      <h1 class="text-2xl xl:text-3xl font-bold mb-4 sm:mb-0 mx-auto">
        Sản phẩm mới
      </h1>

      <div class="w-full flex flex-col md:flex-row gap-0 sm:gap-x-6">
        <!-- Filter Sidebar -->
        <div class="w-1/5 hidden md:block">
          <div
            class="sticky top-20 border border-gray-300 bg-white rounded-lg max-h-[calc(100vh-6rem)] flex flex-col shadow-md"
          >
            <ProductsFilter
              :filters="productFilters"
              :resetFilter="resetFilter"
              :isResetable="isResetAble"
            />
          </div>
        </div>

        <div class="w-full basis-full flex-1 flex-col md:w-4/5 md:basis-auto">
          <ProductsList
            :products="DEMO_ALL_PRODUCTS.products"
            :productsPerPage="12"
            :currentPage="page"
          />
        </div>
      </div>
    </div>
  </div>
  <OffcanvasFilter
    title="Bộ lọc nâng cao"
    :filterArrs="productFilters"
    id="hs-offcanvas-filters-options"
    :resetFilter="resetFilter"
  />
</template>
