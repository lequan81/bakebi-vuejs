<script>
// Import social_badges svg files
import twitter from "@assets/social_badges/twitter.svg";
import facebook from "@assets/social_badges/facebook.svg";
import instagram from "@assets/social_badges/instagram.svg";
import github from "@assets/social_badges/github.svg";

const socialBagdes = [
  {
    title: "Twitter",
    icon: twitter,
    href: "#",
  },
  {
    title: "Facebook",
    icon: facebook,
    href: "#",
  },
  {
    title: "Instagram",
    icon: instagram,
    href: "#",
  },
  {
    title: "Github",
    icon: github,
    href: "https://github.com/huehwe/bakebi_ecommerce",
  },
];

export default {
  name: "SocialBagdes",
  props: {
    socialBagdes: {
      type: Array,
      default: () => socialBagdes,
    },
  },
};
</script>
<template>
  <template v-for="(badge, index) in socialBagdes" :key="index">
    <a
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
</template>
