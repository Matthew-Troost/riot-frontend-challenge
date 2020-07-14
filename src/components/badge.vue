<template>
  <div
    :class="`text-sm font-medium rounded-full bg-black py-1 px-3 ml-6 ${success ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`"
  >
    <svg
      v-if="success"
      class="h-4 w-4 inline fill-current text-green-800"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <svg
      v-else
      class="h-4 w-4 inline fill-current text-red-800"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
    {{ success ? "Successful" : "Unsuccessful" }}
  </div>
</template>
<script>
export default {
  props: {
    success: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
