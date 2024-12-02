<script setup>
defineProps({
  name: {
    type: String,
    default: "DateFormatter",
  },
  date: {
    type: String,
    required: true,
  },
  isDateTime: {
    type: Boolean,
    default: false,
  },
  is12Hour: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span class="tabular-nums text-gray-800 font-medium text-xs">{{
    new Date(date).toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour12: is12Hour,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      ...(isDateTime && {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    })
  }}</span>
</template>
