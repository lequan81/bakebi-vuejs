div
<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { PRODUCTS_ID } from "@utils/constants";

const props = defineProps({
  name: {
    type: String,
    default: "SearchboxItem",
  },
  title: {
    type: String,
    default: undefined,
  },
  index: {
    type: Number,
    required: true,
    default: undefined,
  },
  categoryId: {
    type: [String, Number],
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});

const router = useRouter();

const dataHSComboBoxStores = computed(() => {
  const hsConfig = {
    id: props.index !== undefined ? props.index : props.title,
    name: props.title || "Item " + props.index,
  };

  return JSON.stringify(hsConfig);
});
</script>

<template>
  <div
    :class="`cursor-pointer py-2 px-4 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100`"
    :tabindex="index"
    data-hs-combo-box-output-item=""
    data-hs-combo-box-item-stored-data=""
    @click="
      router.push(
        `/products/${PRODUCTS_ID[props.categoryId].category}/${props.href}`
      )
    "
  >
    <div class="flex justify-between items-center w-full">
      <span
        class="block w-full truncate"
        :data-hs-combo-box-search-text="title"
        data-hs-combo-box-value=""
      >
        {{ title }}
      </span>
      <span class="hidden hs-combo-box-selected:block text-blue-600">
        <CheckIcon
          class="shrink-0 size-3.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </span>
    </div>
  </div>
</template>
