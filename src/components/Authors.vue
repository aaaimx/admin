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
              outline
              :color="props.item.active ?'green' :'red'"
            >{{ props.item.active ? 'Si' : 'No' }}</v-chip>
          </td>
          <td class="text-xs-left">
            <v-chip
              color="secondary"
              v-if="props.item.roles.length"
              text-color="white"
            >{{props.item.roles[0].name }}</v-chip>
          </td>
          <td class="justify-center">
            <v-icon small class="" @click="editItem(props.item)">edit</v-icon>
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
import NewColl from "@/components/NewColl";
export default {
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
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    }
  }
};
</script>