<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useFavoriteProductsStore } from "@stores";
import {
  PriceFormatter,
  CategoryFormatter,
  StarReview,
  Button,
} from "@components";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/vue/24/outline";
import { PRODUCTS_ID } from "@utils/constants";

const props = defineProps({
  name: {
    type: String,
    default: "ProductCard",
  },
  productName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 3.5,
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
  priceClasses: {
    type: String,
    default: "",
  },
});

const router = useRouter();
const favoriteStore = useFavoriteProductsStore();

const isFavorite = computed(() => favoriteStore.isFavorite(props.product_id));

const toggleFavorite = (event) => {
  event.preventDefault();
  event.stopPropagation();
  favoriteStore.toggleFavorite(props.product_id);
};

const navigateToProduct = () => {
  router.push(
    `/products/${PRODUCTS_ID[props.category_id].category}/${props.product_id}`
  );
};
</script>

<template>
  <div
    @click="navigateToProduct"
    class="group relative flex-shrink-0 w-full max-w-64 md:max-w-[calc(25%-1.25rem)] md:min-w-64 h-fit shadow-md rounded-md border border-gray-200 bg-white outline outline-1 md:outline-2 outline-offset-2 outline-transparent hover:border-transparent hover:outline-blue-600 transition-all duration-300 ease-out"
  >
    <div class="relative" @click.self="">
      <img
        :src="imgUrl"
        :alt="productName"
        class="rounded-t-md object-cover aspect-square w-full h-44 sm:h-full sm:max-h-64 brightness-90 hover:brightness-95 transition-brightness duration-300 ease-in-out"
      />
      <Button
        btnClass="absolute top-2 right-2 p-1.5 md:p-2 rounded-md shadow-lg transition-colors duration-300 ease-in-out"
        bgClass="bg-white hover:bg-gray-50"
        :icon="ShoppingCartIcon"
        iconClass="size-4 lg:size-5 xl:size-6 text-gray-700"
        @click.stop="() => console.log('Add to cart')"
      ></Button>
    </div>
    <div class="p-2 md:p-3 space-y-1 w-full">
      <div class="flex flex-row w-full items-center justify-between">
        <h3
          class="font-semibold text-sm sm:text-base xl:text-lg truncate w-3/4 sm:w-full"
        >
          {{ productName }}
        </h3>
        <Button
          btnClass="p-1.5 border-none size-6 sm:size-8"
          bgClass="bg-transparent"
          :icon="HeartIcon"
          :iconClass="`shrink-0 size-5 sm:size-6 ml-auto cursor-pointer ${
            isFavorite
              ? 'fill-red-500 text-red-500 hover:fill-none sm:hover:fill-red-500'
              : 'text-red-400 hover:fill-red-500'
          }`"
          @click="toggleFavorite"
        ></Button>
      </div>
      <div
        class="flex flex-row w-full items-center justify-between flex-wrap sm:flex-nowrap gap-y-2 sm:gap-y-0"
      >
        <StarReview :rating="rating" />
        <CategoryFormatter :category_id="category_id" />
      </div>
      <PriceFormatter
        :price="price"
        :oldPrice="oldPrice"
        :wrapperClasses="priceClasses"
      />
    </div>
  </div>
</template>
