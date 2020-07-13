<template>
  <div class="p-6 border-b border-gray-400 flex">
    <div class="inline-block flex-grow">
      <span class="text-purple-700 block">Maxime Binet</span>
      <span class="block font-light text-gray-600"
        >Sent by the
        <span class="font-normal border-b-2 border-dotted"
          >One-off campaign to 1 employee</span
        >
        campaign</span
      >
    </div>

    <div class="flex flex-grow-0">
      <div class="self-center flex text-gray-600 text-sm">
        20 hours ago
      </div>
      <div
        v-if="success"
        class="self-center text-gray-600 text-sm font-bold rounded-full bg-black py-1 px-3 ml-6"
      >
        <svg
          class="h-4 w-4 inline fill-current text-purple-700"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Successful
      </div>
      <div
        v-else
        class="self-center text-gray-600 text-sm font-bold rounded-full bg-black py-1 px-3 ml-6"
      >
        <svg
          class="h-4 w-4 inline fill-current text-purple-700"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        Unsuccessful
      </div>
      <svg
        class="h-4 w-4 ml-6 self-center fill-current text-purple-700"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div>
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
