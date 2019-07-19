<template>
  <v-container grid-list-xl fluid>
    <ProjectsTable />
    <br />
    <NewProject />
  </v-container>
</template>

<script>
import MiniStatistic from "@/components/MiniStatistic";
import ProjectsTable from "./ProjectsTable";
import NewProject from "./NewProject";
export default {
  props: {
    source: String
  },
  components: {
    ProjectsTable,
    NewProject,
    MiniStatistic
  }
};
</script>
