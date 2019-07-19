<template>
  <v-app id="inspire">
    <notifications />
    <div v-if="!$route.meta.public">
      <Tollbar />
      <v-content>
        <PageHeader v-if="$route.meta.breadcrumb"></PageHeader>
        <div class="page-wrapper">
          <router-view />
        </div>
      </v-content>
    </div>
    <router-view v-else />
  </v-app>
</template>

<script>
import NotificationList from "@/components/NotificationList";
import PageHeader from "@/components/PageHeader";
import Tollbar from "@/components/layout/Tollbar";
import appMixin from '@/mixins/init'
export default {
  mixins: [appMixin],
  components: {
    PageHeader,
    Tollbar,
    NotificationList
  },
  created() {
    this.initialize();
  },
  props: {
    source: String
  }
};
</script>
