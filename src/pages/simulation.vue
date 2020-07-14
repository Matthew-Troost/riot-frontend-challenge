<template>
  <div>
    <h1 class="text-3xl font-bold text-white my-10">Attacks</h1>
    <grid title="Attacks" :canLoadMore="canLoadMore" @load-more="loadMore">
      <div
        v-for="attack in attacks"
        :key="attack.id"
        class="p-6 border-b border-gray-400 flex"
      >
        <div class="inline-block flex-grow">
          <div class="text-purple-700">
            {{ attack.employee.firstname }} {{ attack.employee.lastname }}
          </div>
          <div class="font-light text-gray-600">
            <span v-if="attack.campaign"
              >Sent by the
              <span class="font-normal border-b-2 border-dotted">{{
                attack.campaign.name
              }}</span>
              campaign</span
            >
            <span v-else>Sent individually</span>
          </div>
        </div>

        <div class="flex flex-grow-0">
          <div class="self-center flex text-gray-600 text-sm">
            20 hours ago
          </div>
          <badge class="self-center" />
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
    </grid>
  </div>
</template>

<script>
import grid from "@/components/grid.vue";
import badge from "@/components/badge.vue";
import { getAttacks } from "@/apollo/queries.gql";

export default {
  components: {
    grid,
    badge,
  },
  data() {
    return {
      pageCount: 0,
      canLoadMore: true,
    };
  },
  apollo: {
    attacks: {
      query: getAttacks,
      variables: {
        limit: 5,
        offset: 0,
      },
    },
  },
  methods: {
    loadMore() {
      this.$apollo.queries.attacks.fetchMore({
        variables: {
          offset: ++this.pageCount * 5,
          limit: 5,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newAttacks = fetchMoreResult.attacks;
          this.canLoadMore = newAttacks.length == 5;

          return {
            attacks: [...previousResult.attacks, ...newAttacks],
          };
        },
      });
    },
  },
};
</script>
