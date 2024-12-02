<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { ChevronDownIcon, ListBulletIcon } from "@heroicons/vue/24/outline";

defineProps({
  name: {
    type: String,
    default: "NavbarItem",
  },
  title: {
    type: String,
    required: true,
  },
  submenuTitle: {
    type: String,
    default: undefined,
  },
  href: {
    type: String,
    required: true,
    default: "#",
  },
  icon: {
    type: [Object, Function], // Allow component types
    default: null,
  },
  dropdownItems: {
    type: Array,
    default: undefined,
  },
  submenuItems: {
    type: Array,
    default: undefined,
  },
});

const route = useRoute();

const isDefaultHomePath = computed(() => {
  switch (route.path.split("/")[1]) {
    case "login":
    case "signup":
    case "forgot-password":
    case "reset-password":
    case "cart":
      return true;
    default:
      return false;
  }
});

const productSelected = (href, productItem) => {
  if (!href || href.split("/").length <= 2) {
    return false;
  } else {
    return (
      href.split("/")[1] === "products" &&
      productItem === route.path.split("/")[2]
    );
  }
};
</script>

<template>
  <router-link
    v-if="dropdownItems === undefined"
    custom
    :to="href"
    v-slot="{ isExactActive, href, navigate }"
  >
    <a
      :href="href"
      @click="navigate"
      :class="`text-sm font-medium transition-all duration-300 ease-in-out transform sm:mx-1.5 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition-all after:duration-300 after:ease-in-out after:origin-left
        ${
          isExactActive || (href === '/' && isDefaultHomePath)
            ? 'text-blue-600 after:scale-x-100'
            : 'hover:text-blue-600 after:scale-x-0 after:hover:scale-x-100'
        }
      `"
    >
      <div
        class="md:py-0 flex flex-row items-center gap-y-0.5 md:gap-y-0 md:gap-x-6"
      >
        <component
          :is="icon"
          v-if="icon"
          class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        {{ title }}
      </div>
    </a>
  </router-link>

  <!-- Dropdown -->
  <div
    v-if="dropdownItems !== undefined"
    class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] sm:w-fit text-sm font-medium group"
  >
    <button
      id="hs-header-base-dropdown"
      type="button"
      :class="`hs-dropdown-toggle group inline items-end text-sm font-medium transition-all duration-300 ease-in-out transform sm:mx-1.5 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition-all after:duration-300 after:ease-in-out after:origin-left ${
        href === '/' + route.path.split('/')[1]
          ? 'text-blue-600 after:scale-x-100'
          : 'after:scale-x-0 after:group-hover:scale-x-100 group-hover:text-blue-600'
      }`"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
    >
      <div className="inline-flex w-fit items-center gap-x-1 sm:gap-x-0.5">
        <ListBulletIcon
          class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <span>{{ title }}</span>
        <ChevronDownIcon
          class="hs-dropdown-open:rotate-180 transition-transform duration-300 ease-out shrink-0 size-3 md:size-3.5 ms-auto md:ms-1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </div>
    </button>

    <div
      class="hs-dropdown-menu border-none md:border border-gray-200 transition-[opacity,margin] duration-[0.1ms] md:duration-150 hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-fit md:min-w-36 md:px-1 hidden z-10 top-full ps-7 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-2 after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 ease-in-out"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-header-base-dropdown"
    >
      <div class="p-0.5">
        <router-link
          v-for="(item, index) in dropdownItems"
          :key="index"
          custom
          :to="`${href}/${item.category}`"
          v-slot="{ isExactActive, href, navigate }"
        >
          <a
            :class="`p-2 md:px-3.5 my-1 flex items-center text-sm outline-none w-fit min-w-40 sm:w-full rounded transition-colors duration-200 ease-in-out ${
              isExactActive || productSelected(href, item.category)
                ? 'bg-blue-600 text-white'
                : 'text-gray-800 hover:bg-gray-100'
            }`"
            :href="`${href}`"
            @click="navigate"
          >
            {{ item.name }}
          </a>
        </router-link>

        <div
          v-if="submenuItems !== undefined"
          class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] [--placement:bottom-left] relative"
        >
          <button
            id="hs-dropdown-sub"
            type="button"
            class="hs-dropdown-toggle w-full py-1.5 md:px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500"
          >
            <div
              className="inline-flex w-fit items-center gap-x-1 sm:gap-x-0.5"
            >
              <ListBulletIcon
                class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              {{ submenuTitle }}
              <ChevronDownIcon
                class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 transition-transform duration-300 ease-out ms-auto shrink-0 size-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </div>
          </button>

          <div
            class="hs-dropdown-menu border-none md:border border-gray-200 transition-[opacity,margin] duration-[0.1ms] md:duration-150 hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:!mx-[10px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-2 after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 ease-in-out"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-dropdown-sub"
          >
            <div class="p-0.5">
              <router-link
                v-for="(item, index) in submenuItems"
                :key="index"
                exact
                :to="`${href}${item.href}`"
                v-slot="{ isExactActive, href, navigate }"
              >
                <a
                  :key="index"
                  :class="`p-2 md:px-3 flex items-center text-sm outline-none w-full px-2 py-1.5 my-1 rounded transition-colors duration-200 ease-in-out ${
                    isExactActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-800 hover:bg-gray-100'
                  }`"
                  :href="`${href}${item.href}`"
                  @click="navigate"
                >
                  {{ item.title }}
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Dropdown -->
</template>
