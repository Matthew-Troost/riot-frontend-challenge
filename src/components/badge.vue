<template>
  <div
    :class="
      `text-xs font-medium rounded-full bg-black py-1 px-3 ${
        success ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
      }`
    "
  >
    <x v-if="success" class="h-4 w-4 inline fill-current text-red-800" />
    <check v-else class="h-4 w-4 inline fill-current text-green-800" />
    <span class="hidden sm:inline-block">{{ success ? "Successful" : "Unsuccessful" }}</span>
  </div>
</template>
<script>
import check from "@/assets/images/icons/check.svg";
import x from "@/assets/images/icons/x.svg";

export default {
  props: {
    success: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    check,
    x,
  },
};
</script>
