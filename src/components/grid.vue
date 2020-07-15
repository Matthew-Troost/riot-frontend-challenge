<template>
  <div class="bg-white rounded-lg shadow">
    <div class="p-6 text-xl border-b border-gray-300">
      {{ title }}
    </div>
    <slot></slot>
    <div v-if="canLoadMore" class="p-4 text-center font-medium text-indigo-600">
      <img v-if="loading" :src="loading_gif" class="m-auto w-10"/>
      <span
        v-else
        class="cursor-pointer py-1 px-2 rounded-md hover:bg-gray-100"
        @click="$emit('load-more')"
        ><chevDown class="h-5 w-5 inline fill-current text-indigo-600" /> load
        more</span
      >
    </div>
  </div>
</template>
<script>
import chevDown from "@/assets/images/icons/chev-down.svg";
import loading_gif from "@/assets/images/loading.gif";

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
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      loading_gif,
    };
  },
};
</script>
