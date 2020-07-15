<template>
  <div>
    <h1 class="text-3xl font-bold text-white my-10">Attacks</h1>
    <grid title="Attacks" :canLoadMore="canLoadMore" :loading="$apollo.loading" @load-more="loadMore">
      <div
        v-for="attack in attacks"
        :key="attack.id"
        class="flex p-6 border-b border-gray-300 hover:bg-gray-100"
      >
        <div class="inline-block flex-grow">
          <span class="font-medium cursor-pointer text-indigo-600 hover:text-indigo-800">
            {{ attack.employee.firstname }} {{ attack.employee.lastname }}
          </span>
          <div class="font-light text-gray-600">
            <span v-if="attack.campaign"
              >Sent by the
              <span class="font-normal cursor-pointer border-b-2 border-dotted hover:text-gray-700">{{
                attack.campaign.name
              }}</span>
              campaign</span
            >
            <span v-else>Sent individually</span>
          </div>
        </div>

        <div class="flex">
          <div class="self-center flex font-light text-gray-600 text-sm hidden lg:block">
            {{ attack.created_at | moment("from", "now") }}
          </div>
          <div class="self-center w-10 text-center mx-8 sm:w-32">
            <badge class="m-auto fit-content" :success="attack.status == 'success'" />
          </div>
          <chevRight
            class="h-4 w-4 self-center fill-current cursor-pointer text-gray-600"
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
