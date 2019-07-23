<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <!-- mini statistic start -->
      <v-flex lg4 sm4 md4 xs12>
        <mini-statistic icon="fa-users" :title="$store.state.colls.collaborators.length" sub-title="Collaborators" color="indigo"></mini-statistic>
      </v-flex>
      <v-flex lg4 sm4 md4 xs12>
        <mini-statistic icon="fa-project-diagram" :title="$store.state.projects.projects.length" sub-title="Projects" color="red"></mini-statistic>
      </v-flex>
      <v-flex lg4 sm4 md4 xs12>
        <mini-statistic
          icon="school"
          :title="$store.state.research.researches.length"
          sub-title="Researches"
          color="light-blue"
        ></mini-statistic>
      </v-flex>
      <!-- mini statistic  end -->
    </v-layout>
    <AuthorsTable />
  </v-container>
</template>

<script>
import MiniStatistic from "@/components/MiniStatistic";
import AuthorsTable from "./AuthorsTable";
export default {
  props: {
    source: String
  },
  components: {
    AuthorsTable,
    MiniStatistic
  }
};
</script>
