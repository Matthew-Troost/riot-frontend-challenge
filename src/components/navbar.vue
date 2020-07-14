<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-transparent py-5 border-b border-gray-700"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-8">
      <logo />
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white"
        @click="isOpen = !isOpen"
      >
        <burgerMenu class="fill-current h-3 w-3" />
      </button>
    </div>
    <div
      :class="
        `${
          isOpen ? 'block' : 'hidden'
        } w-full flex-grow lg:flex lg:items-center lg:w-auto`
      "
    >
      <div class="text-sm lg:flex-grow">
        <a
          href="#"
          class="block py-1 px-2 mt-4 rounded-md lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-6"
        >
          Dashboard
        </a>
        <a
          href="#"
          class="block py-1 px-2 mt-4 rounded-md lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-6"
        >
          Team
        </a>
        <a
          href="#"
          :class="
            `${
              $route.path == '/simulation'
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:text-white'
            } block py-1 px-2 mt-4 rounded-md lg:inline-block lg:mt-0`
          "
        >
          Simulation
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm p-2 leading-none text-gray-400 mt-4 lg:mt-0"
          >Louis Cibot</a
        ><chevDown class="inline h-4 w-4 fill-current text-gray-400" />
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
};
</script>
