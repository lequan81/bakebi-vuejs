<script>
import Hero from "./Hero/index.vue";
import ProductsIntro from "./ProductsIntro/index.vue";
import ProductsCustomize from "./ProductsCustomize/index.vue";
import UsersReview from "./UsersReview/index.vue";
import { DEMO_PRODUCTS, DEMO_REVIEWS } from "@utils/constants";

export default {
  name: "Home",
  components: {
    Hero,
    ProductsIntro,
    ProductsCustomize,
    UsersReview,
  },
  data() {
    return {
      DEMO_PRODUCTS,
      DEMO_REVIEWS,
    };
  },
};
</script>
<template>
  <div class="flex flex-col size-full grow bg-white space-y-6">
    <!-- Landing section -->
    <Hero />
    <!-- Products Intro Cards -->
    <ProductsIntro
      title="Sản phẩm mới"
      :productDatas="DEMO_PRODUCTS"
      href="/recently"
    />
    <ProductsIntro
      title="Sản phẩm bán chạy"
      :productDatas="DEMO_PRODUCTS"
      href="/top-trending"
    />
    <ProductsCustomize title="Dành cho bạn" :productsArray="DEMO_PRODUCTS" />
    <UsersReview title="Đánh giá của khách hàng" :reviews="DEMO_REVIEWS" />
  </div>
</template>
