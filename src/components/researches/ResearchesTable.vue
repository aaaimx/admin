<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      v-model="selected"
      :search="search"
      :loading="researches.length == 0 ? 'warning' : null"
      :items="researches"
      :expand="expand"
      item-key="title"
    >
      <template v-slot:items="props">
        <tr>
          <td @click="props.expanded = !props.expanded">{{ props.item.title }}</td>
          <td class="text-xs-left">{{ props.item.year }}</td>
          <td class="text-xs-left">{{ props.item.type }}</td>
          <td class="text-xs-left">{{ props.item.pub_type }}</td>
          <td class="justify-center">
            <v-icon small class @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item.uuid)">delete</v-icon>
          </td>
        </tr>
      </template>
      <template v-slot:no-results>
        <v-alert
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results</v-alert>
      </template>
      <template v-slot:expand="props">
        <v-expansion-panel focusable>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <v-badge right>
                  <template v-slot:badge>
                    <span>{{props.item.lines.length}}</span>
                  </template>
                  <strong>Interest Areas</strong>
                </v-badge>
              </div>
            </template>
            <v-card>
              <v-card-text>
                <v-chip
                  small
                  label
                  v-for="(key, i) in props.item.lines"
                  :key="i"
                  color="secondary"
                  text-color="white"
                >{{key}}</v-chip>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <v-badge right>
                  <template v-slot:badge>
                    <span>{{props.item.projects.length}}</span>
                  </template>
                  <strong>Projects</strong>
                </v-badge>
              </div>
            </template>
            <v-card v-for="(key, i) in props.item.projects" :key="i">
              <v-card-text>
                <v-input
                  :messages="[key.start.slice(0, 10)+ ' - ' + key.end.slice(0, 10)]"
                >{{key.title}}</v-input>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <v-badge right>
                  <template v-slot:badge>
                    <span>{{props.item.authors.length}}</span>
                  </template>
                  <strong>Authors</strong>
                </v-badge>
              </div>
            </template>
            <v-card>
              <v-card-text v-for="(key, i) in props.item.authors" :key="i">
                <v-input
                  :messages="[key.active ? 'SC member' : 'No SC member']"
                >{{i+1}}. {{key.fullname}}</v-input>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content v-if="props.item.type == 'Tesis'">
            <template v-slot:header>
              <div>
                <v-badge right>
                  <template v-slot:badge>
                    <span>{{props.item.advisors.length}}</span>
                  </template>
                  <strong>Advisors</strong>
                </v-badge>
              </div>
            </template>
            <v-card>
              <v-card-text v-for="(key, i) in props.item.advisors" :key="i">
                <v-input :messages="[key.active]">{{key.fullname}}</v-input>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </template>
      <template v-slot:no-data>
        <v-alert :value="true" color="error" icon="warning">Sorry, nothing to display here :(</v-alert>
      </template>
    </v-data-table>
    <NewColl />
  </div>
</template>
<script>
import NewColl from "@/components/collaborators/NewColl";
import swal from "sweetalert2";
import { mapState } from "vuex";
import appMixin from "@/mixins/init";
export default {
  mixins: [appMixin],
  components: {
    NewColl
  },
  data: () => ({
    search: "",
    expand: false,
    dialog: false,
    selected: [],
    headers: [
      {
        text: "Research title / description",
        align: "left",
        sortable: true,
        search: true,
        value: "title"
      },
      { text: "Year", value: "year" },
      { text: "Type", value: "type" },
      { text: "Publication type", value: "pub_type" },
      { text: "Actions", sortable: false }
    ]
  }),

  computed: {
    ...mapState("research", ["researches"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  methods: {
    editItem(item) {
      this.$store.commit("research/setResearch", item);
    },

    deleteItem(uuid) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.$http.delete("/researches/" + uuid, this.research).then(
              res => {
                swal.fire("Deleted!", "Project has been deleted.", "success");
                this.initialize();
              },
              err => {
                console.log(err);
                swal.fire({
                  position: "center",
                  type: "error",
                  title: "Something went wrong:(... Try Again!",
                  showConfirmButton: false,
                  timer: 1500
                });
                this.isLoading = false;
              }
            );
          }
        });
    }
  }
};
</script>