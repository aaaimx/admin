<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Collaborators</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      v-model="selected"
      :search="search"
      :items="$store.state.colls.collaborators"
      :expand="expand"
      item-key="fullname"
    >
      <template v-slot:items="props">
        <tr>
          <td @click="props.expanded = !props.expanded">{{ props.item.fullname }}</td>
          <td class="text-xs-left">{{ props.item.adscription }}</td>
          <td class="text-xs-left">
            <v-chip
              small
              outline
              :color="props.item.active ?'green' :'red'"
            >{{ props.item.active ? 'Si' : 'No' }}</v-chip>
          </td>
          <td class="text-xs-left">
            <v-chip
              v-for="role in props.item.roles"
              small
              label
              :key="role"
              :color="badges[role]"
              text-color="white"
            >{{role}}</v-chip>
          </td>
          <td class="justify-center">
            <v-btn @click="editItem(props.item)" flat icon small color="primary">
              <v-icon small>edit</v-icon>
            </v-btn>
            <v-btn @click="deleteItem(props.item)" flat icon small color="red">
              <v-icon small>delete</v-icon>
            </v-btn>
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
                    <span>{{props.item.theses.length}}</span>
                  </template>
                  <strong>Thesis</strong>
                </v-badge>
              </div>
            </template>
            <v-card v-for="(key, i) in props.item.theses" :key="i">
              <v-card-text>
                <v-input :messages="[key.year]">{{key.title}}</v-input>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <v-badge right>
                  <template v-slot:badge>
                    <span>{{props.item.publications.length}}</span>
                  </template>
                  <strong>Publications</strong>
                </v-badge>
              </div>
            </template>
            <v-card>
              <v-card-text v-for="(key, i) in props.item.publications" :key="i">
                <v-input :messages="[key.year]">{{key.title}}</v-input>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <v-badge right>
                  <template v-slot:badge>
                    <span>{{props.item.presentations.length}}</span>
                  </template>
                  <strong>Presentations</strong>
                </v-badge>
              </div>
            </template>
            <v-card>
              <v-card-text v-for="(key, i) in props.item.publications" :key="i">
                <v-input :messages="[key.year]">{{key.title}}</v-input>
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
import NewColl from "./NewColl";
import swal from "sweetalert2";
export default {
  components: {
    NewColl
  },
  data: () => ({
    search: "",
    expand: false,
    dialog: false,
    selected: [],
    badges: {
      Student: "success",
      Researcher: "warning",
      Graduated: "secondary",
      Teacher: "primary"
    },
    headers: [
      {
        text: "Lastname & name",
        align: "left",
        sortable: true,
        search: true,
        value: "fullname"
      },
      { text: "Adscription", value: "adscription" },
      { text: "SC Member", value: "active" },
      { text: "Roles", value: "roles" },
      { text: "Actions", sortable: false }
    ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  methods: {
    editItem(item) {},

    deleteItem(item) {
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
            swal("Deleted!", "Your file has been deleted.", "success");
          }
        });
    }
  }
};
</script>