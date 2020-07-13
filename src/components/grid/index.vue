<template>
  <div class="bg-white rounded-lg shadow">
    <div class="p-6 text-xl border-b border-gray-400">
      Attacks
    </div>
    <row v-for="attack in attacks" :key="attack.id" :success="true" />
    <div class="p-4 text-center text-purple-700">
      <span
        ><svg
          class="h-6 w-6 inline fill-current text-purple-700"
          viewBox="0 0 20 20"
        >
          <path
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path></svg
      ></span>
      load more
    </div>
  </div>
</template>

<script>
import row from "./row";

export default {
  props: {
    attacks: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    row,
  },
};
</script>
