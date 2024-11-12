<script>
import Searchbox from "../Searchbox/index.vue";
import BtnGroup from "../BtnGroup.vue";
import NavbarItem from "./NavbarItem.vue";
import { DEFAULT_NAVIGATION } from "@utils/constants";
import { HomeIcon } from "@heroicons/vue/24/outline";

export default {
  name: "Navbar",
  components: {
    Searchbox,
    BtnGroup,
    NavbarItem,
    HomeIcon,
  },
  data() {
    return {
      DEFAULT_NAVIGATION,
    };
  },
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
          <template v-for="(item, index) in DEFAULT_NAVIGATION" :key="index">
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
