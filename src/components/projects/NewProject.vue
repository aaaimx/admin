<template>
  <v-card flat>
    <v-system-bar color="#800040">
      <v-spacer></v-spacer>
      <v-icon small>square</v-icon>
      <v-icon class="ml-1" small>circle</v-icon>
      <v-icon class="ml-1" small>triangle</v-icon>
    </v-system-bar>
    <v-toolbar color="amber accent-4" cards dark flat>
      <v-card-title class="title font-weight-regular">Register Project</v-card-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-form ref="form" v-model="form" class="pa-3 pt-4">
      <v-textarea
        v-model="project.title"
        :rules="[rules.required]"
        auto-grow
        label="Title"
        rows="3"
      ></v-textarea>

      <v-combobox
        label="Institute"
        :items="institutes"
        chips
        tags
        v-model="project.Adscription.institute"
        browser-autocomplete
        prepend-icon="business"
        cache-items
        :rules="[rules.required]"
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
            <v-avatar
              class="accent"
            >{{ data.item.institute ? data.item.institute.slice(0, 1).toUpperCase() : data.item.slice(0, 1).toUpperCase() }}</v-avatar>
            {{ data.item.institute ? data.item.institute.split('/')[1] : data.item }}
          </v-chip>
        </template>
      </v-combobox>

      <v-autocomplete
        label="In charge"
        :items="collaborators"
        chips
        v-model="project.InCharge.uuid"
        browser-autocomplete
        prepend-icon="fa fa-user"
        :rules="[rules.required]"
        item-text="fullname"
        item-value="uuid"
      >
        <template slot="selection" slot-scope="data">
          <v-chip
            @input="data.parent.selectItem(data.item)"
            class="chip--select-multi"
            :selected="data.selected"
            :key="JSON.stringify(data.item)"
          >
            <v-avatar class="accent">{{ data.item.lastname.slice(0, 1).toUpperCase() }}</v-avatar>
            {{ data.item.lastname}}, {{ data.item.name}}
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-tile-content v-text="data.item"></v-list-tile-content>
          </template>
          <template v-else>
            <v-list-tile-content>
              <v-list-tile-title v-html="data.item.fullname"></v-list-tile-title>
              <v-list-tile-sub-title v-html="data.item.adscription"></v-list-tile-sub-title>
            </v-list-tile-content>
            <br />
          </template>
        </template>
      </v-autocomplete>
      <v-combobox
        v-model="project.Topics"
        :items="lines"
        chips
        prepend-icon="fa fa-project-diagram"
        tags
        hide-selected
        :search-input.sync="search"
        :rules="[rules.required]"
        color="blue-grey lighten-2"
        label="Interest areas"
        item-text="topic"
        item-value="topic"
        small-chips
        multiple
        :return-object="false"
      >
        <template v-slot:no-data>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                No results matching "
                <strong>{{ search }}</strong>". Press
                <kbd>enter</kbd> to create a new one
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <template v-slot:selection="{ item, parent, selected }">
          <v-chip :selected="selected" label small>
            <span class="pr-2">{{ item.topic ? item.topic : item }}</span>
            <v-icon small @click="parent.selectItem(item)">close</v-icon>
          </v-chip>
        </template>
        <template v-slot:item="data">
          <template v-if="typeof data.item !== 'object'">
            <v-list-tile-content v-text="data.item"></v-list-tile-content>
          </template>
          <template v-else>
            <v-list-tile-content>
              <v-list-tile-title v-html="data.item.topic"></v-list-tile-title>
              <v-list-tile-sub-title v-html="data.item.category"></v-list-tile-sub-title>
            </v-list-tile-content>
          </template>
        </template>
      </v-combobox>
      <label for>Vigency</label>
      <v-layout row wrap>
        <v-flex xs12 sm6 md6>
          <v-menu
            ref="menu"
            v-model="menu1"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="project.start"
                label="Start"
                prepend-icon="event"
                :rules="[rules.required]"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker ref="picker" v-model="project.start" min="1950-01-01" @change="save"></v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-menu
            ref="menu"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="project.end"
                label="End"
                prepend-icon="event"
                :rules="[rules.required]"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              :rules="[rules.required]"
              v-model="project.end"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
      <v-btn
        :disabled="!form"
        v-if="!isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
        @click="publish()"
      >Publish</v-btn>
      <Circle8 v-else />
    </v-card-actions>
  </v-card>
</template>
<script>
import swal from "sweetalert2";
import Circle8 from "vue-loading-spinner/src/components/Circle8";
import { mapState } from "vuex";
import appMixin from "@/mixins/init";
export default {
  mixins: [appMixin],
  components: {
    Circle8
  },
  computed: {
    ...mapState("projects", ["project", "projects", "lines"]),
    ...mapState("colls", ["collaborators"]),
    ...mapState("partners", ["institutes"])
  },
  data: () => ({
    dialog: false,
    menu1: false,
    menu2: false,
    form: false,
    isLoading: false,
    search: "",
    rules: {
      required: v => !!v || "This field is required"
    }
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    remove(item) {
      this.$store.commit("projects/removeProjectTopic", item);
    },

    publish() {
      this.isLoading = true;
      console.log(this.project);
      this.$http.post("/projects", this.project).then(
        res => {
          swal.fire({
            position: "top-right",
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.isLoading = false;
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
  }
};
</script>
