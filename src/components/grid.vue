<template>
  <div class="bg-white rounded-lg shadow">
    <div class="p-6 text-xl border-b border-gray-400">
      {{ title }}
    </div>
    <slot></slot>
    <div v-if="canLoadMore" class="p-4 text-center text-purple-700">
      <span @click="$emit('load-more')"
        ><chevDown class="h-6 w-6 inline fill-current text-purple-700" /> load
        more</span
      >
    </div>
  </div>
</template>
<script>
import chevDown from "@/assets/images/icons/chev-down.svg";

export default {
  components: {
    chevDown,
  },
  props: {
    title: {
      type: String,
      default: "Grid Title",
    },
    canLoadMore: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
