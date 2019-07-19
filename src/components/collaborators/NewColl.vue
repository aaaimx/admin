<template>
  <div>
    <v-btn fab bottom right color="#800040" dark fixed @click="dialog = !dialog">
      <v-icon>fa fa-user-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-card>
          <v-card-title class="amber py-4 title">Register Collaborator</v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 sm12 md6 lg6 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
                  </v-avatar>
                  <v-text-field
                    browser-autocomplete
                    placeholder="Lastname"
                    name="lastname"
                    :rules="[v => !!v || 'This field is required']"
                    v-model="author.lastname"
                    required
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6>
                <v-text-field
                  prepend-icon="user"
                  browser-autocomplete
                  v-model="author.name"
                  required
                  :rules="[v => !!v || 'This field is required']"
                  name="name"
                  placeholder="Name"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-combobox
                  label="Select"
                  :items="institutes"
                  chips
                  tags
                  v-model="author.Adscription.institute"
                  browser-autocomplete
                  :loading="loading"
                  :search-input.sync="search"
                  prepend-icon="business"
                  cache-items
                  :rules="[v => !!v || 'This field is required']"
                  item-text="institute"
                  item-value="institute"
                  :return-object="false"
                >
                  <template slot="selection" slot-scope="data">
                    <v-chip
                      @input="data.parent.selectItem(data.item)"
                      class="chip--select-multi"
                      :selected="data.selected"
                      :key="JSON.stringify(data.item)"
                    >
                      <v-avatar class="accent">{{ data.item.slice(0, 1).toUpperCase() }}</v-avatar>
                      {{ data.item.split('/') ? data.item.split('/')[1] : data.item }}
                    </v-chip>
                  </template>
                </v-combobox>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  browser-autocomplete
                  name="email"
                  type="email"
                  v-model="author.email"
                  placeholder="Email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-combobox
                  label="Roles"
                  prepend-icon="notes"
                  :items="['Researcher', 'Student', 'Teacher', 'Graduated']"
                  chips
                  tags
                  v-model="author.Roles"
                  multi-line
                  :rules="[() => author.Roles.length > 0 || 'Item is required']"
                  multiple
                  cache-items
                  item-text="lastname"
                  item-value="uuid"
                  return-object
                ></v-combobox>
              </v-flex>
              <v-flex xs12>
                <v-switch
                  v-model="author.active"
                  :label="`SC Member ${author.active ? 'active':'inactive'} `"
                ></v-switch>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat v-show="!loading" color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat v-show="!loading" @click="save()">Save</v-btn>
            <Circle8 v-show="loading" />
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import swal from "sweetalert2";
import appMixin from "@/mixins/init";
import Circle8 from "vue-loading-spinner/src/components/Circle";
import { mapState } from "vuex";
export default {
  ixins: [appMixin],
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  components: {
    Circle8
  },
  computed: {
    ...mapState("colls", ["author"]),
    ...mapState("partners", ["institutes"])
  },
  methods: {
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log(this.author);
        this.$http.post("/collaborators", this.author).then(
          res => {
            swal.fire({
              position: "top-right",
              type: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            this.loading = false;
            this.initialize()
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
            this.loading = false;
          }
        );
      }
    }
  },

  data() {
    return {
      dialog: false,
      loading: false,
      valid: false,
      search: ""
    };
  }
};
</script>
