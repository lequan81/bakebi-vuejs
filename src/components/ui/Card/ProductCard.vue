<script>
import { ref } from "vue";
import { StarReview } from "@components/ui/index.js";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/vue/24/outline";
import { PRODUCTS_ID } from "@utils/constants";

export default {
  name: "ProductCard",
  components: {
    StarReview,
    ShoppingCartIcon,
    HeartIcon,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
    oldPrice: {
      type: [String, Number],
      default: 0,
    },
    category_id: {
      type: [String, Number],
      required: true,
    },
    product_id: {
      type: [String, Number],
      required: true,
    },
  },
  setup() {
    const isFavorite = ref(false);

    return {
      isFavorite,
    };
  },
  data() {
    return {
      PRODUCTS_ID,
    };
  },
};
</script>

<template>
  <router-link
    :to="`/products/${PRODUCTS_ID[category_id].category}/${product_id}`"
    @click.prevent.stop=""
    class="group relative w-full min-w-64 h-fit shadow-sm rounded-md border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
  >
    <div class="relative">
      <img
        :src="imgUrl"
        :alt="name"
        class="rounded-t-md object-cover aspect-square size-full brightness-90 hover:brightness-95 transition-brightness duration-200"
      />
      <button
        @click.prevent.stop=""
        class="absolute top-2 right-2 p-2 rounded-md bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <ShoppingCartIcon
          class="size-5 sm:size-6 text-gray-700"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </button>
    </div>
    <div class="p-3 space-y-1.5 w-full">
      <div class="flex flex-row w-full items-center justify-between">
        <h3 class="font-semibold text-base sm:text-lg truncate">{{ name }}</h3>
        <button
          class="block py-1"
          @click.prevent="
            () => {
              isFavorite = !isFavorite;
            }
          "
        >
          <HeartIcon
            :class="`shrink-0 size-5 sm:size-6 cursor-pointer ${
              isFavorite
                ? 'fill-red-500 text-red-500'
                : ' text-red-400 hover:fill-red-500'
            }`"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </button>
      </div>
      <div class="mt-2 flex flex-row items-baseline gap-x-4">
        <span class="font-bold text-base sm:text-lg">
          {{
            new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(Number(price))
          }}
        </span>
        <span
          v-if="Number(oldPrice) > 0"
          class="font-semibold text-sm text-gray-500 line-through"
        >
          {{
            new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(Number(oldPrice))
          }}
        </span>
        <span
          v-if="Number(oldPrice) > 0"
          :class="`rounded py-0.5 px-1.5 text-xs sm:text-sm font-semibold ml-auto ${
            oldPrice > price
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-red-700'
          }`"
        >
          {{ Math.round(((price - oldPrice) / oldPrice) * 100) }}%
        </span>
      </div>
      <div class="flex flex-row w-full items-center justify-between">
        <StarReview />
        <span
          v-if="category_id !== undefined"
          :class="`rounded py-0.5 px-1.5 text-sm font-semibold ml-auto ${
            category_id === 0
              ? 'bg-red-100 text-red-600'
              : 'bg-orange-100 text-orange-600'
          }`"
        >
          {{ PRODUCTS_ID[category_id].name }}
        </span>
      </div>
    </div>
  </router-link>
</template>
