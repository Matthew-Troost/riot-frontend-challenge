<template>
  <div>
    <h1 class="text-3xl font-bold text-white my-10">Attacks</h1>
    <grid title="Attacks" :canLoadMore="canLoadMore" @load-more="loadMore">
      <div
        v-for="attack in attacks"
        :key="attack.id"
        class="flex p-6 border-b border-gray-400 cursor-pointer hover:bg-gray-100"
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
          <div class="self-center flex font-light text-gray-600 text-sm">
            {{ attack.created_at | moment("from", "now") }}
          </div>
          <badge class="self-center" :success="attack.status == 'success'" />
          <chevRight
            class="h-4 w-4 ml-6 self-center fill-current text-gray-600"
          />
        </div>
      </div>
    </grid>
  </div>
</template>

<script>
import grid from "@/components/grid.vue";
import badge from "@/components/badge.vue";
import chevRight from "@/assets/images/icons/chev-right.svg";
import { getAttacks } from "@/apollo/queries.gql";

export default {
  components: {
    grid,
    badge,
    chevRight,
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
