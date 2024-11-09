<script setup>
import { ref } from "vue";
import Searchbox from "../Searchbox/index.vue";
import BtnGroup from "../BtnGroup.vue";
import NavbarItem from "./NavbarItem.vue";
import {
  HomeIcon,
  ListBulletIcon,
  StarIcon,
  FireIcon,
} from "@heroicons/vue/24/outline";

const defaultNavigation = ref([
  { title: "Trang chủ", href: "/", icon: HomeIcon },
  {
    title: "Sản phẩm",
    href: "/products",
    icon: ListBulletIcon,
    isDropdown: true,
    dropdownItems: [
      { title: "Bánh ngọt", href: "/sweetcake" },
      { title: "Bánh nướng", href: "/cake" },
    ],
  },
  {
    title: "Mới nhất",
    href: "/recently",
    icon: StarIcon,
  },
  { title: "Bán chạy", href: "/top-trending", icon: FireIcon },
]);

const name = "Navbar";
const components = {
  Searchbox,
  BtnGroup,
  NavbarItem,
  HomeIcon,
};
</script>
<template>
  <div
    id="hs-header-base"
    class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:grow-0 md:basis-auto md:max-w-fit md:block md:size-full"
    aria-labelledby="hs-header-base-collapse"
  >
    <div
      class="py-2 md:py-0 flex flex-col md:flex-row md:items-center size-full overflow-hidden justify-between gap-1 md:gap-x-10"
    >
      <div class="grow size-full">
        <div
          class="flex flex-col size-full md:flex-row md:items-center justify-start px-2 sm:px-1 gap-y-3 md:gap-y-0 md:gap-x-2"
        >
          <template v-for="(item, index) in defaultNavigation" :key="index">
            <NavbarItem
              :title="item.title"
              :href="item.href"
              :isDropdown="item.isDropdown"
              :dropdownItems="item.dropdownItems"
              :isSubmenu="item.isSubmenu"
              :submenuTitle="item.submenuTitle"
              :submenuItems="item.submenuItems"
              :icon="item.icon"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
  <Searchbox />
  <BtnGroup :isMini="false" />
</template>
