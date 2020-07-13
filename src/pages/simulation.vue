<template>
  <div>
    <h1 class="text-3xl font-bold text-white my-10">Attacks</h1>
    <grid :attacks="attacks" />
    <button @click="loadMore">test</button>
  </div>
</template>

<script>
import grid from "@/components/grid";
import { getAttacks } from "@/apollo/queries.gql";

export default {
  components: {
    grid,
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
