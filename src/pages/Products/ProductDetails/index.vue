<script>
import RelativeProducts from "./RelativeProducts.vue";
import ProductsSlide from "./ProductsSlide.vue";
import { StarReview } from "@components";
import { DEMO_DETAILS_PRODUCT, DEMO_PRODUCTS } from "@utils/constants";

export default {
  name: "ProductDetails",
  components: {
    RelativeProducts,
    ProductsSlide,
    StarReview,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    product_id: {
      type: [String, Number],
      required: true,
    },
  },

  data() {
    return {
      DEMO_DETAILS_PRODUCT,
      DEMO_PRODUCTS,
      selectedSize: null,
      selectedTag: null,
    };
  },
  methods: {
    selectSize(size) {
      this.selectedSize = this.selectedSize === size ? null : size;
    },
    selectTag(tag) {
      this.selectedTag = this.selectedTag === tag ? null : tag;
    },
  },
  mounted() {
    console.log(this.category, this.product_id);
  },
};
</script>
<template>
  <div class="flex flex-col size-full grow bg-white space-y-6">
    <div class="w-full mx-auto px-6 sm:px-16 lg:px-20 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 overflow-hidden">
        <!-- Product Images -->
        <ProductsSlide :images="DEMO_DETAILS_PRODUCT.images" />

        <!-- Product Details -->
        <div class="space-y-1 pr-4">
          <h1 class="text-3xl font-bold">{{ DEMO_DETAILS_PRODUCT.name }}</h1>

          <!-- Rating -->
          <StarReview :rating="DEMO_DETAILS_PRODUCT.rating" />
          <!-- <div class="flex items-center gap-2">
        </div> -->

          <!-- Price -->
          <div class="flex items-center gap-x-6 pt-3">
            <span class="text-2xl font-bold">
              {{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(Number(DEMO_DETAILS_PRODUCT.price))
              }}
            </span>
            <span
              v-if="DEMO_DETAILS_PRODUCT.oldPrice !== undefined"
              class="text-gray-500 line-through"
              >{{
                new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(Number(DEMO_DETAILS_PRODUCT.oldPrice))
              }}</span
            >
            <span
              v-if="Number(DEMO_DETAILS_PRODUCT.oldPrice) !== undefined"
              :class="`rounded py-0.5 px-1.5 text-xs sm:text-sm font-semibold ml-auto ${
                DEMO_DETAILS_PRODUCT.oldPrice > DEMO_DETAILS_PRODUCT.price
                  ? 'bg-red-100 text-red-700'
                  : 'bg-green-100 text-red-700'
              }`"
            >
              {{
                Math.round(
                  ((DEMO_DETAILS_PRODUCT.price -
                    DEMO_DETAILS_PRODUCT.oldPrice) /
                    DEMO_DETAILS_PRODUCT.oldPrice) *
                    100
                )
              }}%
            </span>
          </div>

          <!-- Description -->
          <p class="text-gray-600 py-6">
            {{
              DEMO_DETAILS_PRODUCT.description ||
              "Bánh ngọt hương vị ngọt ngào như nyc của bạn. Nhưng mà đâu có ngọt như nyc đâu nha, chỉ là một câu quảng cáo thôi mà. À mà quên mất, bạn làm gì có mối tình đầu!"
            }}
          </p>

          <div class="space-y-6">
            <!-- Size Selection -->
            <div>
              <h3 class="text-sm font-medium mb-3">Chọn size</h3>
              <div class="flex gap-3">
                <button
                  v-for="size in ['S', 'M', 'L']"
                  :key="size"
                  :class="`size-10 rounded-full border flex items-center justify-center hover:border-gray-500 hover:bg-gray-50 transition-colors ${
                    selectedSize === size
                      ? 'bg-gray-100 border-gray-400'
                      : 'bg-white border-gray-200'
                  }`"
                  @click="selectSize(size)"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- Tags -->
            <div>
              <h3 class="text-sm font-medium mb-3">Tùy chọn thêm</h3>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="tag in ['Giảm ngọt', 'Chay', 'Trái cây', 'Giòn rụm']"
                  :class="`px-3 py-1 border rounded-full text-sm hover:border-gray-500 hover:bg-gray-50 transition-colors ${
                    selectedTag === tag
                      ? 'bg-gray-100 border-gray-400'
                      : 'bg-white border-gray-200'
                  }`"
                  :key="tag"
                  @click="selectTag(tag)"
                >
                  {{ tag }}
                </button>
              </div>
            </div>
          </div>

          <!-- Quantity and Add to Cart -->
          <div class="flex items-center gap-x-8 pt-12">
            <div
              class="inline-flex items-center rounded-lg bg-white border border-gray-200"
              data-hs-input-number='{
            "max": 9999,
            "min": 0
            }'
            >
              <!-- Decrease button -->
              <button
                @click="decrease"
                class="size-9 flex items-center justify-center text-gray-600 bg-white hover:bg-gray-50 rounded-l-md transition-colors focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                tabindex="-1"
                aria-label="Decrease"
                data-hs-input-number-decrement=""
              >
                <span class="sr-only">Decrease quantity</span>
                <svg
                  class="shrink-0 size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  />
                </svg>
              </button>

              <!-- Quantity input -->
              <input
                class="w-12 border-x text-center bg-transparent focus:outline-none focus:ring-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                style="-moz-appearance: textfield"
                type="number"
                aria-roledescription="Number field"
                value="0"
                data-hs-input-number-input=""
              />

              <!-- Increase button -->
              <button
                @click="increase"
                class="size-9 flex items-center justify-center text-gray-600 bg-white hover:bg-gray-50 rounded-r-md transition-colors focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                tabindex="-1"
                aria-label="Increase"
                data-hs-input-number-increment=""
              >
                <span class="sr-only">Increase quantity</span>
                <svg
                  class="shrink-0 size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button
              class="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>

    <RelativeProducts
      title="Có thể bạn cũng thích"
      :productDatas="DEMO_PRODUCTS"
    />
  </div>
</template>

<style scoped>
/* Override Preline slider default behavior */
.hs-overlay {
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}

.hs-overlay.open {
  transform: translateY(0);
}

/* Adjust the positioning for bottom-to-top animation */
[data-hs-overlay] {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}
</style>
