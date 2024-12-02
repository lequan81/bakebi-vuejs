<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import PaginationItem from "./PaginationItem.vue";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  name: {
    type: String,
    default: "Pagination",
  },
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  maxVisiblePages: {
    type: Number,
    default: 5,
  },
});

const router = useRouter();
const route = useRoute();

const displayedPages = computed(() => {
  const pages = [];
  let start = Math.max(1, props.currentPage - 2);
  let end = Math.min(props.totalPages, start + props.maxVisiblePages - 1);

  if (end - start + 1 < props.maxVisiblePages) {
    start = Math.max(1, end - props.maxVisiblePages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

const changePage = (page) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  router.push({
    path: route.path,
    query: { ...route.query, page },
  });
};
</script>

<template>
  <nav
    class="flex justify-between items-center gap-x-1"
    aria-label="Pagination"
  >
    <button
      type="button"
      class="size-fit py-2 px-2.5 flex justify-center items-center gap-x-1.5 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      aria-label="Previous"
      :disabled="currentPage === 1"
      @click="changePage(currentPage - 1)"
    >
      <ArrowLeftIcon
        class="shrink-0 size-3.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <span class="w-full text-sm text-gray-800">Trang trước</span>
    </button>
    <div class="flex items-center gap-x-1">
      <PaginationItem
        v-for="page in displayedPages"
        :key="page"
        :currentPage="currentPage"
        :pageNumber="page"
        @click="changePage(page)"
      />
      <!-- <div class="hs-tooltip inline-block">
        <button
          type="button"
          class="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
        >
          <span class="group-hover:hidden text-xs">•••</span>
          <svg
            class="group-hover:block hidden shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path>
          </svg>
          <span
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
            role="tooltip"
          >
            Next {{ maxVisiblePages + 1 }} pages
          </span>
        </button>
      </div> -->
    </div>
    <button
      type="button"
      class="size-fit py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      aria-label="Next"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <span class="w-full text-sm text-gray-800">Trang sau</span>
      <ArrowRightIcon
        class="shrink-0 size-3.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </button>
  </nav>
</template>
