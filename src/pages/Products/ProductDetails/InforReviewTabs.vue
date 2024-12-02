<script setup>
import { onMounted } from "vue";
import { HSTabs } from "preline";
import FiltersReviewBtnGroup from "./FiltersReviewBtnGroup.vue";
import { ReviewCard, Tabs, Button } from "@components";
import { DEFAULT_PRODUCT_TABS } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "InforReviewTabs",
  },
  productName: {
    type: String,
    required: true,
  },
  productDetails: {
    type: Object,
    required: true,
  },
  reviews: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  HSTabs.autoInit();
});
</script>

<template>
  <div class="max-w-7xl mx-auto w-full">
    <Tabs :tabs="DEFAULT_PRODUCT_TABS">
      <div class="mt-4 sm:mt-6">
        <!-- Product Details Tab -->
        <div
          class="space-y-4 pr-1 sm:p-0 sm:space-y-8"
          id="tab-0"
          role="tabpanel"
          aria-labelledby="tab-item-0"
        >
          <h1 class="text-xl sm:text-2xl font-bold tracking-wide">
            {{ productName }}
          </h1>

          <div v-for="(detail, index) in productDetails" :key="index">
            <h2 class="text-sm sm:text-lg font-bold uppercase mb-2">
              {{ detail.title }}
            </h2>
            <p
              v-if="detail.contents.isList !== true"
              v-for="(content, index) in detail.contents.data"
              :key="index"
              class="text-sm sm:text-base"
            >
              {{ content }}
            </p>
            <ul v-else class="list-disc list-inside space-y-1">
              <li
                v-for="(content, index) in detail.contents.data"
                :key="index"
                class="text-sm sm:text-base"
              >
                {{ content }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Reviews Tab -->
        <div
          class="space-y-6 hidden"
          id="tab-1"
          role="tabpanel"
          aria-labelledby="tab-item-1"
        >
          <!-- Reviews Header -->
          <div class="flex items-center justify-between">
            <span class="text-sm sm:text-base font-semibold">
              {{
                reviews.length > 0
                  ? `Tất cả đánh giá (${reviews.length})`
                  : "Chưa có đánh giá"
              }}
            </span>
            <!-- Filter Btn and Write Review Btn Group -->
            <FiltersReviewBtnGroup :reviewsLength="reviews?.length || 0" />
          </div>

          <!-- Reviews Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-6">
            <ReviewCard
              v-for="(review, index) in reviews.slice(0, 6)"
              :key="index"
              :reviewerName="review.name || 'Anomynous'"
              :reviewContent="review.text"
              :rating="review.rating"
              :createdAt="review.createdAt"
            />
          </div>

          <!-- Load More Button -->
          <div class="text-center pt-4">
            <Button
              type="secondary"
              btnClass="py-2 px-3 sm:px-4 rounded-full w-fit mx-auto"
              bgClass="border border-black hover:bg-gray-100"
            >
              <span class="w-full font-medium text-xs sm:text-sm">
                Tải thêm đánh giá
              </span>
            </Button>
          </div>
        </div>
      </div>
    </Tabs>
  </div>
</template>
