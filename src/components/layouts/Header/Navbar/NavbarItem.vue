<script>
import { HSDropdown } from "preline";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

export default {
  name: "NavbarItem",
  components: { ChevronDownIcon },
  props: {
    isDropdown: {
      type: Boolean,
      default: false,
    },
    isSubmenu: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    icon: {
      type: [Object, Function], // Allow component types
      default: null,
    },
    submenuTitle: {
      type: String,
    },
    dropdownItems: {
      type: Array,
      // required: true,
      // default: () => [],
    },
    submenuItems: {
      type: Array,
    },
  },
  setup() {
    setTimeout(() => {
      HSDropdown.autoInit();
    }, 100);
  },
  computed: {
    isDefaultHomePath() {
      switch (this.$route.path.split("/")[1]) {
        case "login":
        case "signup":
        case "forgot-password":
        case "reset-password":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<template>
  <router-link
    v-if="!isDropdown"
    custom
    :to="href"
    v-slot="{ isExactActive, href, navigate }"
  >
    <a
      :href="href"
      @click="navigate"
      :class="`text-sm font-medium transition-all duration-200 transform sm:mx-1.5 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition after:duration-200 after:origin-left
        ${
          isExactActive || (href === '/' && isDefaultHomePath)
            ? 'text-blue-600 dark:text-gray-200 after:scale-x-100'
            : 'dark:hover:text-gray-200 hover:text-blue-600 after:scale-x-0 after:hover:scale-x-100'
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
    v-if="isDropdown"
    class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] sm:w-fit text-sm font-medium group"
  >
    <button
      id="hs-header-base-dropdown"
      type="button"
      :class="`hs-dropdown-toggle group inline items-end text-sm font-medium transition-all duration-200 transform sm:mx-1.5 relative w-fit sm:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-500 after:w-full after:transition after:duration-200 after:origin-left ${
        href === '/' + this.$route.path.split('/')[1]
          ? 'text-blue-600 dark:text-gray-200 after:scale-x-100'
          : 'after:scale-x-0 after:group-hover:scale-x-100 dark:group-hover:text-gray-200 group-hover:text-blue-600'
      }`"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-label="Dropdown"
    >
      <div className="inline-flex w-fit items-center gap-x-1 sm:gap-x-0.5">
        <svg
          class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m3 10 2.5-2.5L3 5" />
          <path d="m3 19 2.5-2.5L3 14" />
          <path d="M10 6h11" />
          <path d="M10 12h11" />
          <path d="M10 18h11" />
        </svg>
        <span>{{ title }}</span>
        <ChevronDownIcon
          class="hs-dropdown-open:rotate-180 duration-300 shrink-0 size-3 md:size-3.5 ms-auto md:ms-1"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </div>
    </button>

    <div
      class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-fit md:min-w-36 md:px-1 hidden z-10 top-full ps-7 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-2 after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="hs-header-base-dropdown"
    >
      <div class="py-1 md:px-1 space-y-0.5">
        <template v-for="(item, index) in dropdownItems" :key="index">
          <router-link
            custom
            :to="`${href}${item.href}`"
            v-slot="{ isExactActive, href, navigate }"
          >
            <a
              :class="`p-2 md:px-3.5 flex items-center text-sm outline-none w-fit min-w-40 sm:w-full my-1 rounded ${
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
        </template>

        <div
          v-if="isSubmenu"
          class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] [--placement:bottom-left] relative"
        >
          <button
            id="hs-secondaru-navbar-dropdown-sub"
            type="button"
            class="hs-dropdown-toggle w-full py-1.5 md:px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          >
            <div
              className="inline-flex w-fit items-center gap-x-1 sm:gap-x-0.5"
            >
              <svg
                class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 10 2.5-2.5L3 5" />
                <path d="m3 19 2.5-2.5L3 14" />
                <path d="M10 6h11" />
                <path d="M10 12h11" />
                <path d="M10 18h11" />
              </svg>
              {{ submenuTitle }}
              <ChevronDownIcon
                class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </div>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:!mx-[10px] md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-2 after:w-0.5 after:h-[calc(100%-0.25rem)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="hs-secondaru-navbar-dropdown-sub"
          >
            <div class="p-1 space-y-0.5 md:space-y-1">
              <template v-for="(item, index) in submenuItems" :key="index">
                <router-link
                  exact
                  :to="`${href}${item.href}`"
                  v-slot="{ isExactActive, href, navigate }"
                >
                  <a
                    :key="index"
                    :class="`p-2 md:px-3 flex items-center text-sm outline-none w-full px-2 py-1.5 my-1 rounded ${
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
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Dropdown -->
</template>
