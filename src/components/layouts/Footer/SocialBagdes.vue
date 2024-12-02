<script setup>
import { SOCIAL_BADGES } from "@/utils/constants";
defineProps({
  name: {
    type: String,
    default: "SocialBagdes",
  },
  socialBagdes: {
    type: Array,
    default: SOCIAL_BADGES,
  },
});
</script>
<template>
  <a
    v-for="(badge, index) in SOCIAL_BADGES"
    :key="index"
    :href="badge.href"
    target="_blank"
    class="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-900 hover:bg-gray-200 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
  >
    <img
      :src="badge.icon"
      :alt="badge.title"
      class="size-4 inline-flex justify-center items-center pointer-events-none"
    />
  </a>
</template>
