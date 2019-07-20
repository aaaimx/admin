<template>
  <v-container grid-list-xl fluid>
    <ResearchesTable />
    <br />
    <NewResearch />
  </v-container>
</template>

<script>
import MiniStatistic from "@/components/MiniStatistic";
import ResearchesTable from "./ResearchesTable";
import NewResearch from "./NewResearch";
export default {
  props: {
    source: String
  },
  components: {
    ResearchesTable,
    NewResearch,
    MiniStatistic
  }
};
</script>
