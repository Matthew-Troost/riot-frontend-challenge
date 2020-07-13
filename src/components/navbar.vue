<template>
  <nav class="flex items-center justify-between flex-wrap bg-transparent py-5 border-b border-gray-700">
    <div class="flex items-center flex-shrink-0 text-white mr-8">
      <img :src="logo" />
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white-200 border-white-400 hover:text-white hover:border-white"
      @click="isOpen = !isOpen"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div :class="`${isOpen ? 'block' : 'hidden'} w-full flex-grow lg:flex lg:items-center lg:w-auto`">
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
          class="block py-1 px-2 mt-4 rounded-md lg:inline-block lg:mt-0 text-gray-400 hover:text-white hover:bg-black"
        >
          Simulation
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-500 hover:bg-white mt-4 lg:mt-0"
          >Download</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "../assets/images/logo.svg";
export default {
  data() {
    return {
      logo,
      isOpen: false
    };
  },
};
</script>
