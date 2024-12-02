<script setup>
defineProps({
  name: {
    type: String,
    default: "Sidebar",
  },
  title: {
    type: String,
    default: "Filters",
  },
  icon: {
    type: [Object, Function], // Allow component types
    default: null,
  },
});
</script>

<template>
  <div class="w-full lg:w-64 flex-shrink-0">
    <div class="flex justify-between items-center lg:hidden mb-4">
      <h2 class="text-lg font-semibold">{{ title }}</h2>
      <button class="p-2 hover:bg-gray-100 rounded-lg">
        <component
          v-if="icon"
          :is="icon"
          class="shrink-0 size-4 md:size-5 text-gray-800"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </button>
    </div>

    <!-- Categories -->
    <div class="space-y-4">
      <div
        v-for="category in categories"
        :key="category.name"
        class="border-b pb-4"
      >
        <button
          class="flex items-center justify-between w-full py-2 text-left hover:text-gray-600"
        >
          <span>{{ category.name }}</span>
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Price Range -->
      <div class="border-b pb-4">
        <h3 class="font-semibold mb-4">Price</h3>
        <div class="px-2">
          <div class="relative h-1 bg-gray-200 rounded-full">
            <div
              class="absolute h-1 bg-blue-500 rounded-full"
              style="left: 25%; right: 25%"
            ></div>
            <div
              class="absolute w-4 h-4 bg-blue-500 rounded-full -mt-1.5"
              style="left: 25%"
            ></div>
            <div
              class="absolute w-4 h-4 bg-blue-500 rounded-full -mt-1.5"
              style="right: 25%"
            ></div>
          </div>
          <div class="flex justify-between mt-4 text-sm text-gray-600">
            <span>$50</span>
            <span>$200</span>
          </div>
        </div>
      </div>

      <!-- Colors -->
      <div class="border-b pb-4">
        <h3 class="font-semibold mb-4">Colors</h3>
        <div class="grid grid-cols-4 gap-2">
          <button
            v-for="color in colors"
            :key="color.value"
            class="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400"
            :class="color.selected ? 'ring-2 ring-blue-500 ring-offset-2' : ''"
            :style="{ backgroundColor: color.value }"
          ></button>
        </div>
      </div>

      <!-- Sizes -->
      <div class="border-b pb-4">
        <h3 class="font-semibold mb-4">Size</h3>
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="size in sizes"
            :key="size.label"
            class="px-3 py-2 border rounded-lg text-sm hover:border-gray-400"
            :class="size.selected ? 'bg-black text-white' : ''"
          >
            {{ size.label }}
          </button>
        </div>
      </div>

      <button
        class="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Apply Filter
      </button>
    </div>
  </div>
</template>
