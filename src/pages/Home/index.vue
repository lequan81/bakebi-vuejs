<script setup>
import { onMounted } from "vue";
import { HSCarousel } from "preline";
import Hero from "./Hero/index.vue";
import { ProductsSlide, ReviewSlide } from "@components";
import { DEMO_PRODUCTS, DEMO_REVIEWS } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "Home",
  },
});

onMounted(() => {
  HSCarousel.autoInit();
});
</script>
<template>
  <div class="flex flex-col size-full grow bg-white space-y-6">
    <!-- Landing section -->
    <Hero />
    <!-- Products Slides -->
    <ProductsSlide
      title="Sản phẩm mới"
      :products="DEMO_PRODUCTS"
      href="/recently"
    />
    <ProductsSlide
      title="Sản phẩm bán chạy"
      :products="DEMO_PRODUCTS"
      href="/top-trending"
    />
    <ProductsSlide
      title="Dành cho bạn"
      :products="DEMO_PRODUCTS"
      :isCustomize="true"
    />
    <!-- Users Review Slides -->
    <ReviewSlide title="Đánh giá của khách hàng" :reviews="DEMO_REVIEWS" />
  </div>
</template>
