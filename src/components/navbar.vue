<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-transparent py-5 border-b border-gray-700"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-8">
      <logo />
    </div>
    <div class="block cursor-pointer lg:hidden">
      <span
        class="flex items-center px-3 py-2 outline-none"
        @click="isOpen = !isOpen"
      >
        <burgerMenu class="fill-current text-white h-4 w-4" />
      </span>
    </div>
    <div
      :class="
        `${
          isOpen ? 'block' : 'hidden'
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`
      "
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/simulation"
          class="block py-1 px-2 mt-4 rounded-md lg:inline-block lg:mt-0 sm:px-0 text-gray-400 hover:text-white mr-6"
        >
          Dashboard
        </router-link>
        <router-link
          to="/simulation"
          class="block py-1 px-2 mt-4 rounded-md lg:inline-block lg:mt-0 sm:px-0 text-gray-400 hover:text-white mr-6"
        >
          Team
        </router-link>
        <router-link
          to="/simulation"
          :class="
            `${
              $route.path == '/simulation'
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:text-white sm:px-0'
            } block py-1 px-3 mt-4 rounded-md lg:inline-block lg:mt-0`
          "
        >
          Simulation
        </router-link>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm p-2 leading-none text-gray-400 mt-4 lg:mt-0 sm:px-0 hover:text-white"
          >Louis Cibot
          <chevDown
            class="inline h-4 w-4 fill-current text-gray-400 hover:text-white"
        /></a>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/images/logo.svg";
import chevDown from "@/assets/images/icons/chev-down.svg";
import burgerMenu from "@/assets/images/icons/burger-menu.svg";

export default {
  components: {
    chevDown,
    burgerMenu,
    logo,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    isOpen() {
      this.$emit("toggle");
    },
  },
};
</script>
