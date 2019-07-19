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
      select-all
      :expand="expand"
      item-key="name"
    >
      <template v-slot:items="props">
        <tr>
          <td>
            <v-checkbox v-model="props.selected" primary hide-details></v-checkbox>
          </td>
          <td
            @click="props.expanded = !props.expanded"
          >{{ props.item.lastname }}, {{ props.item.name }}</td>
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
          <td class="justify-center ">
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
        <v-card flat>
          <v-card-text>{{props.item.projects}}</v-card-text>
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
import NewColl from "./NewColl";
import swal from 'sweetalert2'
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
        value: "name"
      },
      { text: "Adscription", value: "adscription" },
      { text: "SC Member", value: "active" },
      { text: "Roles", value: "roles" },
      { text: "Actions", sortable: false, value: "lastname" }
    ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  methods: {

    editItem(item) {
      
    },

    deleteItem(item) {
      swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>