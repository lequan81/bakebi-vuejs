<script setup>
import { SlashIcon } from "@heroicons/vue/24/outline";

defineProps({
  name: {
    type: String,
    default: "BreadcrumbItem",
  },
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    default: "#",
  },
});
</script>

<template>
  <li class="inline-flex items-center">
    <template v-if="href !== '#'">
      <a
        class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
        :href="href"
      >
        {{ title }}
      </a>
      <SlashIcon
        class="shrink-0 size-5 text-gray-400 mx-2"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </template>

    <template v-else>
      <span class="text-sm font-semibold text-gray-800 truncate">
        {{ title }}
      </span>
    </template>
  </li>
</template>
