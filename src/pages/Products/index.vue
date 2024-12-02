<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { HSOverlay } from "preline";
import {
  ProductsList,
  ProductsFilter,
  OffcanvasFilter,
  Button,
} from "@components";
import {
  PRODUCTS_ID,
  DEMO_ALL_PRODUCTS,
  DEFAULT_PRICE_RANGE,
  DEFAULT_SIZES,
  DEFAULT_TAGS,
  DEFAULT_SPECIAL_INGREDIENTS,
} from "@utils/constants";
import { AdjustmentsVerticalIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "Products",
  },
  category: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    default: 1,
  },
});

const categoriesData = ref({ category_id: -1, category_name: "Bánh các loại" });

const handlePathChange = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const foundCategory = PRODUCTS_ID.find(
    (product) => product.category === props.category
  );

  if (foundCategory !== undefined) {
    categoriesData.value = {
      category_id: foundCategory.id,
      category_name: foundCategory.name,
    };
  }
};

watch(() => props.category, handlePathChange);

onMounted(() => {
  handlePathChange();
  HSOverlay.autoInit();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const defaultPrice = ref(DEFAULT_PRICE_RANGE);
const defaultSize = ref(DEFAULT_SIZES);
const defaultTag = ref(DEFAULT_TAGS);
const defaultSpecialIngredients = ref(DEFAULT_SPECIAL_INGREDIENTS);
// const defaultCategory = ref(props.isCategoryId ? null : DEFAULT_CATEGORIES);

const selectedPrice = ref(DEFAULT_PRICE_RANGE[0]?.value);
const selectedSize = ref([DEFAULT_SIZES[0]]);
const selectedTag = ref([DEFAULT_TAGS[0]]);
const selectedSpecialIngredient = ref([DEFAULT_SPECIAL_INGREDIENTS[0]]);
// const selectedCategory = ref([
//   props.isCategoryId ? null : DEFAULT_CATEGORIES[0],
// ]);

const selectPrice = (price) => {
  selectedPrice.value = selectedPrice.value === price ? null : price;
};

/**
 **  The function handles two main cases: selecting "Tất cả" (all sizes) and selecting individual sizes.
 **  1. When "Tất cả" is selected, it resets the selected array to only include "Tất cả".
 **  2. When other sizes is selected, it toggles/checked the selection of that size and ensures "Tất cả" is not selected.
 */
const selectSize = (size) => {
  // use switch case for (marginally) better performance
  switch (size) {
    case "Tất cả":
      selectedSize.value = ["Tất cả"]; // Reset and removed all sizes, make sure only "Tất cả" is selected
      break;
    default:
      // Remove "Tất cả" from the selection if it was there
      selectedSize.value = selectedSize.value.filter((opt) => opt !== "Tất cả");
      // Check if the user select size/current checked size was already selected
      const index = selectedSize.value.indexOf(size);

      // use switch case for (marginally) better performance
      switch (index) {
        // index === -1 first due to the fact that on initting moments, the selectedSize.value is an array with only "Tất cả" item
        // which means none of other sizes wasn't selected
        case -1:
          selectedSize.value.push(size); // If the size wasn't selected, add it
          break;
        default:
          selectedSize.value.splice(index, 1); // If the size was already selected, 1 mean remove only one element it at index position
      }
  }
};

const selectTag = (tag) => {
  switch (tag) {
    case "Tất cả":
      selectedTag.value = ["Tất cả"]; // Reset and removed all tags, make sure only "Tất cả" is selected
      break;
    default:
      // Remove "Tất cả" from the selection if it was there
      selectedTag.value = selectedTag.value.filter((opt) => opt !== "Tất cả");
      const index = selectedTag.value.indexOf(tag);

      switch (index) {
        case -1:
          selectedTag.value.push(tag);
          break;
        default:
          selectedTag.value.splice(index, 1);
      }
  }
};

const selectSpecialIngredient = (specialIngredient) => {
  switch (specialIngredient) {
    case "Tất cả":
      selectedSpecialIngredient.value = ["Tất cả"]; // Reset and removed all tags, make sure only "Tất cả" is selected
      break;
    default:
      // Remove "Tất cả" from the selection if it was there
      selectedSpecialIngredient.value = selectedSpecialIngredient.value.filter(
        (opt) => opt !== "Tất cả"
      );
      const index = selectedSpecialIngredient.value.indexOf(specialIngredient);

      switch (index) {
        case -1:
          selectedSpecialIngredient.value.push(specialIngredient);
          break;
        default:
          selectedSpecialIngredient.value.splice(index, 1);
      }
  }
};

// const selectCategory = (category) => {
//   if (selectedCategory !== null) {
//     switch (category) {
//       case "Tất cả":
//         selectedCategory.value = ["Tất cả"]; // Reset and removed all tags, make sure only "Tất cả" is selected
//         break;
//       default:
//         // Remove "Tất cả" from the selection if it was there
//         selectedCategory.value = selectedCategory.value.filter(
//           (opt) => opt !== "Tất cả"
//         );
//         const index = selectedCategory.value.indexOf(category);

//         switch (index) {
//           case -1:
//             selectedCategory.value.push(category);
//             break;
//           default:
//             selectedCategory.value.splice(index, 1);
//         }
//     }
//   }
// };

const resetFilter = () => {
  selectedPrice.value = defaultPrice[0]?.value || "dutien";
  selectedSize.value = [defaultSize[0]?.value || "Tất cả"];
  selectedSpecialIngredient.value = [
    defaultSpecialIngredients[0]?.value || "Tất cả",
  ];
  selectedTag.value = [defaultTag[0]?.value || "Tất cả"];
  // selectedCategory.value = [defaultCategory[0]?.value || "Tất cả"];
};

const isResetAble = computed(() => {
  switch (true) {
    case selectedPrice.value !== (defaultPrice[0]?.value || "dutien"):
    case selectedSize.value[0] !== (defaultSize[0]?.value || "Tất cả"):
    case selectedSpecialIngredient.value[0] !==
      (defaultSpecialIngredients[0]?.value || "Tất cả"):
    case selectedTag.value[0] !== (defaultTag[0]?.value || "Tất cả"):
      // case selectedCategory.value[0] !== (defaultCategory[0]?.value || "Tất cả"):
      return true;
    default:
      return false;
  }
});

const productFilters = ref([
  {
    title: "Khoảng giá",
    isInitOpen: true,
    textClasses:
      "hs-accordion-active:text-black font-medium hs-accordion-active:font-semibold text-gray-800 hover:text-gray-900",
    type: "button",
    filters: defaultPrice,
    selectedElm: selectedPrice,
    onSelect: selectPrice,
  },
  {
    title: "Kích thước",
    isInitOpen: true,
    textClasses:
      "hs-accordion-active:text-black font-medium hs-accordion-active:font-semibold text-gray-800 hover:text-gray-900",
    type: "checkbox",
    filters: defaultSize,
    selectedElm: selectedSize,
    onSelect: selectSize,
  },
  {
    title: "Thành phần",
    isInitOpen: false,
    textClasses:
      "hs-accordion-active:text-black font-medium hs-accordion-active:font-semibold text-gray-800 hover:text-gray-900",
    type: "checkbox",
    filters: defaultSpecialIngredients,
    selectedElm: selectedSpecialIngredient,
    onSelect: selectSpecialIngredient,
  },
  {
    title: "Tùy chọn thêm",
    isInitOpen: false,
    textClasses:
      "hs-accordion-active:text-black font-medium hs-accordion-active:font-semibold text-gray-800 hover:text-gray-900",
    type: "checkbox",
    filters: defaultTag,
    selectedElm: selectedTag,
    onSelect: selectTag,
  },
]);
</script>

<template>
  <div class="size-full flex-1 flex-col bg-white sm:pb-20 pb-32">
    <div
      class="flex flex-col flex-nowrap gap-2 lg:gap-4 xl:gap-6 w-full mx-auto py-4 sm:py-8 px-4 sm:px-8"
    >
      <!-- Title -->
      <h1 class="text-2xl font-bold mb-4 sm:mb-0">
        {{ categoriesData.category_name }}
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
