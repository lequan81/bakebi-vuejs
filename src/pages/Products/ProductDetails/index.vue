<script setup>
import { ref, onMounted } from "vue";
import { HSCarousel } from "preline";
import BtnGroup from "./BtnGroup.vue";
import InforReviewTabs from "./InforReviewTabs.vue";
import {
  DEMO_DETAILS_PRODUCT,
  DEMO_PRODUCTS,
  DEFAULT_FILTER,
  STARS_FILTER,
} from "@utils/constants";
import {
  StarReview,
  ProductsSlide,
  ProductsCarousel,
  PriceFormatter,
  CategoryFormatter,
  OffcanvasFilter,
} from "@components";
import HSOverlay from "@preline/overlay";

const props = defineProps({
  name: {
    type: String,
    default: "ProductDetails",
  },
  category: {
    type: String,
    required: true,
  },
  product_id: {
    type: [String, Number],
    required: true,
  },
});

const selectedTime = ref(DEFAULT_FILTER[0] || "Tất cả");
const selectedStar = ref(STARS_FILTER[0] || "Tất cả");

const selectTime = (time) => {
  // Only toggle selectedTime without affecting selectedStar
  selectedTime.value = selectedTime.value === time ? null : time;
};

const selectStar = (star) => {
  // Only toggle selectedStar without affecting selectedTime
  selectedStar.value = selectedStar.value === star ? null : star;
};

const resetSelectedFilter = () => {
  selectedTime.value = DEFAULT_FILTER[0] || "Tất cả";
  selectedStar.value = STARS_FILTER[0] || "Tất cả";
};

// use ref to maintain reactivity/state of selected items ¯\_(ツ)_/¯
const filterArrs = ref([
  {
    title: "Sắp xếp theo",
    filters: DEFAULT_FILTER,
    selectedElm: selectedTime,
    onSelect: selectTime,
  },
  {
    title: "Đánh giá",
    filters: STARS_FILTER,
    selectedElm: selectedStar,
    onSelect: selectStar,
  },
]);

onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  HSCarousel.autoInit();
  HSOverlay.autoInit();
});
</script>
<template>
  <div class="flex flex-col size-full flex-1 bg-white space-y-6 pb-32 sm:pb-20">
    <div
      class="w-full mx-auto px-4 sm:px-12 lg:px-16 py-4 sm:py-8 space-y-6 sm:space-y-8"
    >
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-0 sm:gap-x-16 overflow-hidden max-w-7xl mx-auto"
      >
        <!-- Product Images -->
        <ProductsCarousel :images="DEMO_DETAILS_PRODUCT.images" />

        <!-- Product Details -->
        <div class="space-y-1">
          <div class="flex w-full flex-row space-between items-baseline">
            <h1 class="text-xl sm:text-3xl font-bold grow">
              {{ DEMO_DETAILS_PRODUCT.name }}
            </h1>
            <CategoryFormatter
              :category_id="DEMO_DETAILS_PRODUCT.category_id"
            />
          </div>

          <!-- Rating -->
          <StarReview :rating="DEMO_DETAILS_PRODUCT.rating" />
          <!-- Price -->
          <PriceFormatter
            :price="DEMO_DETAILS_PRODUCT.price"
            :oldPrice="DEMO_DETAILS_PRODUCT.oldPrice"
          />

          <!-- Description -->
          <p class="text-gray-600 py-4 sm:py-6 text-sm sm:text-base">
            {{
              DEMO_DETAILS_PRODUCT.description ||
              "Bánh ngọt hương vị ngọt ngào như nyc của bạn. Nhưng mà đâu có ngọt như nyc đâu nha, chỉ là một câu quảng cáo thôi mà. À mà quên mất, bạn làm gì có mối tình đầu!"
            }}
          </p>

          <!-- Btn Group -->
          <BtnGroup />
        </div>
      </div>
      <!-- More Infors and Reviews Tabs -->
      <InforReviewTabs
        :productName="DEMO_DETAILS_PRODUCT.name"
        :productDetails="DEMO_DETAILS_PRODUCT.details"
        :reviews="DEMO_DETAILS_PRODUCT.reviews"
      />
    </div>

    <ProductsSlide title="Có thể bạn cũng thích" :products="DEMO_PRODUCTS" />
  </div>
  <OffcanvasFilter
    title="Bộ lọc tìm kiếm"
    :filterArrs="filterArrs"
    id="hs-offcanvas-more-options"
    :resetFilter="resetSelectedFilter"
  />
</template>
