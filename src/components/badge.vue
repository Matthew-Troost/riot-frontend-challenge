<template>
  <div
    class="text-gray-600 text-sm font-bold rounded-full bg-black py-1 px-3 ml-6"
  >
    <svg
      v-if="success"
      class="h-4 w-4 inline fill-current text-purple-700"
      viewBox="0 0 20 20"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <svg
      v-else
      class="h-4 w-4 inline fill-current text-purple-700"
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
