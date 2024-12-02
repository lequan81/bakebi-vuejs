<script setup>
import { PAYMENT_BADGES } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "PaymentBadges",
  },
  paymentBadges: {
    type: Array,
    default: PAYMENT_BADGES,
  },
});
</script>

<template>
  <img
    v-for="(badge, index) in PAYMENT_BADGES"
    :key="index"
    :src="badge.path"
    :alt="badge.title"
    class="w-9 h-auto inline-flex justify-center items-center pointer-events-none"
  />
</template>
