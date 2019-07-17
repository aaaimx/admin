<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <!-- mini statistic start -->
      <v-flex lg4 sm4 md4 xs12>
        <mini-statistic icon="facebook" title="100+" sub-title="Projects" color="indigo"></mini-statistic>
      </v-flex>
      <v-flex lg4 sm4 md4 xs12>
        <mini-statistic icon="google" title="150+" sub-title="Researches" color="red"></mini-statistic>
      </v-flex>
      <v-flex lg4 sm4 md4 xs12>
        <mini-statistic icon="twitter" title="200+" sub-title="Collaborators" color="light-blue"></mini-statistic>
      </v-flex>
      <!-- mini statistic  end -->
    </v-layout>
    <Authors />
  </v-container>
</template>

<script>
import MiniStatistic from "@/components/MiniStatistic";
import Authors from "@/components/Authors";
export default {
  props: {
    source: String
  },
  components: {
    Authors,
    MiniStatistic
  }
};
</script>
