<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <div class="page-header-left">
      <h3 class="pr-3">Dashboard</h3>
    </div>
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item>
        <v-icon larg>home</v-icon>
      </v-breadcrumbs-item>
      <v-breadcrumbs-item>{{ $route.name }}</v-breadcrumbs-item>
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
      <v-btn v-if="!loading" @click="initialize(), update()" icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
      <Loading style="width: 35px" v-else />
    </div>
  </v-layout>
</template>

<script>
import appMixin from "@/mixins/init";
import Loading from "vue-loading-spinner/src/components/Circle";
export default {
  mixins: [appMixin],
  data: () => ({
    loading: false
  }),
  components: {
    Loading
  },
  methods: {
    update() {
      this.loading = true;
      this.$notify({
        type: "warning",
          title: "Please wait!",
          text: "Loading from remote server..."
        });
      setTimeout(() => {
        this.loading = false;
        this.$notify({
          title: "Done!",
          text: "Lasted updates ready..."
        });
      }, 2000);
    }
  }
};
</script>
