<template>
    <div>
      <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
        <v-list dense>
          <template v-for="item in items">
            <v-layout v-if="item.heading" :key="item.heading" row align-center>
              <v-flex xs6>
                <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
              </v-flex>
              <!--<v-flex xs6 class="text-xs-center">
                <a href="#!" class="body-2 black--text">EDIT</a>
              </v-flex>-->
            </v-layout>
            <v-list-group
              v-else-if="item.children"
              :key="item.text"
              v-model="item.model"
              :prepend-icon="item.model ? item.icon : item['icon-alt']"
              append-icon
            >
              <template v-slot:activator>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
              <v-list-tile v-for="(child, i) in item.children" :key="i" @click>
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ child.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list-group>
            <v-list-tile v-else :key="item.text" @click="to(item.to || '')">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="amber" dark app fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Dashboard</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-menu
          offset-y
          origin="center center"
          class="elelvation-1"
          :nudge-bottom="14"
          transition="scale-transition"
        >
          <v-btn icon flat slot="activator">
            <v-badge color="red" overlap>
              <span slot="badge">3</span>
              <v-icon medium>notifications</v-icon>
            </v-badge>
          </v-btn>
          <notification-list></notification-list>
        </v-menu>
        <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
          <v-btn icon large flat slot="activator">
            <v-avatar size="30px">
              <img src="static/aaai-square.png" alt="Michael Wang" />
            </v-avatar>
          </v-btn>
          <v-list class="pa-0">
            <v-list-tile
              v-for="(item,index) in menu"
              :to="!item.href ? { name: item.name } : null"
              ripple="ripple"
              :disabled="item.disabled"
              :target="item.target"
              rel="noopener"
              :key="index"
              @click="to(item.href)"
            >
              <v-list-tile-action v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
    </div>
</template>

<script>
import NotificationList from "@/components/NotificationList";
import { mapState } from "vuex";
import items from '@/api/menu';
export default {
  components: {
    NotificationList
  },
  methods: {
    to(route) {
      this.$router.push(route);
    }
  },
  data: () => ({
    dialog: false,
    drawer: null,
    menu: [
      {
        icon: "account_circle",
        href: "/",
        title: "Profile"
      },
      {
        icon: "settings",
        href: "",
        title: "Settings"
      },
      {
        icon: "fullscreen_exit",
        href: "/login",
        title: "Logout"
      }
    ],
    items
  }),
  props: {
    source: String
  }
};
</script>
