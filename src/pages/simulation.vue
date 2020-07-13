<template>
  <div>
    <h1 class="text-3xl font-bold text-white my-10">Attacks</h1>
    <grid :attacks="attacks" />
  </div>
</template>

<script>
import grid from "@/components/grid";
import { getAttacks } from "@/apollo/queries.gql";

export default {
  components: {
    grid,
  },
  apollo: {
    attacks: {
      query: getAttacks,
      variables: {
        limit: 5,
      },
    },
  },
};
</script>
