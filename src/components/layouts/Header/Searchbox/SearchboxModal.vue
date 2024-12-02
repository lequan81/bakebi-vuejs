<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

defineProps({
  name: {
    type: String,
    default: "SearchboxModal",
  },
});
</script>

<template>
  <div class="relative sm:hidden">
    <div
      id="searchbox-modal"
      class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-30 opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
      role="dialog"
      tabindex="-1"
      aria-labelledby="searchbox-modal-label"
    >
      <div
        class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto relative z-50"
      >
        <div
          class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto"
        >
          <div
            class="relative"
            data-hs-combo-box='{
      "groupingType": "default",
      "isOpenOnFocus": true,
      "apiUrl": "http://localhost:5173/searchbox.json",
      "apiGroupField": "category_name",
      "outputItemTemplate": "<div data-hs-combo-box-output-item><span class=\"flex items-center cursor-pointer py-2 px-4 rounded-md w-full text-sm text-gray-800 hover:bg-gray-100\"><div class=\"flex items-center w-full\"><div class=\"flex items-center justify-center rounded-full bg-gray-200 size-6 overflow-hidden me-2.5\"><img class=\"shrink-0 object-cover\" data-hs-combo-box-output-item-attr=&apos;[{\"valueFrom\": \"imgUrl\", \"attr\": \"src\"}, {\"valueFrom\": \"name\", \"attr\": \"alt\"}]&apos; /></div><div data-hs-combo-box-output-item-field=\"name\" data-hs-combo-box-search-text data-hs-combo-box-value></div></div><span class=\"hidden hs-combo-box-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"></polyline></svg></span></span></div>",
      "groupingTitleTemplate": "<div class=\"text-xs uppercase font-medium text-gray-700 m-3 mb-1\"></div>",
      "outputEmptyTemplate": "<div class=\"py-2 px-4 w-full text-sm text-gray-800 rounded-lg\">Không tìm thấy kết quả nào...</div>"
    }'
          >
            <div class="relative p-4 border-b border-gray-200">
              <label
                id="searchbox-modal-label"
                for="searchbox-modal-input"
                class="sr-only"
                >Search input
              </label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                >
                  <MagnifyingGlassIcon
                    class="shrink-0 size-4 text-gray-500"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </div>
                <input
                  id="searchbox-modal-input"
                  type="text"
                  class="py-2 px-10 block w-full bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none placeholder:text-gray-500"
                  placeholder="Search"
                  value=""
                  autofocus=""
                  data-hs-combo-box-input=""
                />
              </div>
            </div>

            <!-- SearchBox Modal Body -->
            <div class="!mt-0" data-hs-combo-box-output="">
              <div
                class="max-h-72 overflow-hidden rounded-b-lg overflow-y-auto p-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
                data-hs-combo-box-output-items-wrapper=""
              ></div>
            </div>
            <!-- SearchBox Modal Body -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
