<script>
// Import payment_bagdes svg files
import visa from "@assets/payment_badges/visa.svg";
import mastercard from "@assets/payment_badges/mastercard.svg";
import paypal from "@assets/payment_badges/paypal.svg";
import applePay from "@assets/payment_badges/apple-pay.svg";
import googlePay from "@assets/payment_badges/google-pay.svg";

const paymentBagdes = [
  {
    title: "Visa",
    path: visa,
  },
  {
    title: "Mastercard",
    path: mastercard,
  },
  {
    title: "Paypal",
    path: paypal,
  },
  {
    title: "Apple Pay",
    path: applePay,
  },
  {
    title: "Google Pay",
    path: googlePay,
  },
];
export default {
  name: "PaymentBadges",
  props: {
    paymentBagdes: {
      type: Array,
      default: () => paymentBagdes,
    },
  },
};
</script>

<template>
  <template v-for="(badge, index) in paymentBagdes" :key="index">
    <img
      :src="badge.path"
      :alt="badge.title"
      class="w-9 h-auto inline-flex justify-center items-center pointer-events-none"
    />
  </template>
</template>
