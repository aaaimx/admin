<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Projects</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      v-model="selected"
      :search="search"
      :loading="projects.length == 0 ? 'warning' : null"
      :items="projects"
      :expand="expand"
      item-key="title"
    >
      <template v-slot:items="props">
        <tr>
          <td
            @click="props.expanded = !props.expanded"
          >{{ props.item.title }}</td>
          <td class="text-xs-left">{{ props.item.institute }}</td>
          <td class="text-xs-left">{{ props.item.in_charge }}</td>
          <td class="justify-center">
            <v-icon small class @click="editItem(props.item)">edit</v-icon>
            <v-icon small @click="deleteItem(props.item)">delete</v-icon>
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
        <v-card flat>
          <v-card-text>{{props.item}}</v-card-text>
        </v-card>
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
export default {
  components: {
    NewColl,
  },
  data: () => ({
    search: "",
    expand: false,
    dialog: false,
    selected: [],
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: true,
        search: true,
        value: "title"
      },
      { text: "Institute", value: "institute" },
      { text: "In charge", value: "in_charge" },
      { text: "Actions", sortable: false, value: "title" }
    ]
  }),

  computed: {
    ...mapState("projects", ["projects"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  methods: {
    editItem(item) {},

    deleteItem(item) {
      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          swal.fire("Deleted!", "Project has been deleted.", "success");
        }
      });
    }
  }
};
</script>