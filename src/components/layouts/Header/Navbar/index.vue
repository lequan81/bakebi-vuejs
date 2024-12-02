<script setup>
import Searchbox from "../Searchbox/index.vue";
import BtnGroup from "../BtnGroup.vue";
import NavbarItem from "./NavbarItem.vue";
import { DEFAULT_NAVIGATION } from "@utils/constants";

defineProps({
  name: {
    type: String,
    default: "Navbar",
  },
});
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
          <NavbarItem
            v-for="(item, index) in DEFAULT_NAVIGATION"
            :key="index"
            :title="item.title"
            :submenuTitle="item.submenuTitle"
            :dropdownItems="item.dropdownItems"
            :submenuItems="item.submenuItems"
            :href="item.href"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
  </div>
  <Searchbox />
  <BtnGroup :isMini="false" />
</template>
