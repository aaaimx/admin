<template>
  <v-stepper v-model="e6">
    <v-system-bar color="#800040">
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-stepper-header>
      <v-stepper-step :complete="e6 > 1" step="1">
        Basic information
        <small>General info to research</small>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e6 > 2" step="2">Details & Collaborators</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Quick View</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-form ref="form" v-model="form">
        <v-stepper-content step="1">
          <v-textarea
            v-model="research.title"
            :rules="[rules.required]"
            clearable
            auto-grow
            label="Title"
            rows="3"
          ></v-textarea>
          <v-textarea clearable v-model="research.description" label="Abstract" rows="5"></v-textarea>
          <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg6>
              <v-text-field
                prepend-icon="schedule"
                browser-autocomplete
                name="year"
                type="number"
                clearable
                :rules="[rules.required]"
                v-model="research.year"
                placeholder="Year"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
              <v-combobox
                label="Type"
                :items="types"
                chips
                tags
                v-model="research.type"
                browser-autocomplete
                prepend-icon="school"
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
                    <v-avatar class="accent">{{ data.item.slice(0, 1).toUpperCase() }}</v-avatar>
                    {{ data.item }}
                  </v-chip>
                </template>
              </v-combobox>
            </v-flex>
          </v-layout>

          <v-combobox
            v-model="research.Topics"
            :items="lines"
            chips
            prepend-icon="timeline"
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

          <v-combobox
            v-model="research.Projects"
            :items="projects"
            chips
            prepend-icon="fa fa-project-diagram"
            hide-selected
            :search-input.sync="search2"
            :rules="[rules.required]"
            color="blue-grey lighten-2"
            label="Related Projects"
            item-text="title"
            item-value="uuid"
            small-chips
            browser-autocomplete
            multiple
            :return-object="false"
          >
            <template v-slot:selection="{ item, parent, selected }">
              <v-chip :selected="selected" label small>
                <span class="pr-2">{{ item }}</span>
                <v-icon small @click="parent.selectItem(item)">close</v-icon>
              </v-chip>
            </template>
            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-tile-content v-text="data.item"></v-list-tile-content>
              </template>
              <template v-else>
                <v-list-tile-content>
                  <v-list-tile-title v-html="data.item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="data.item.institute"></v-list-tile-sub-title>
                </v-list-tile-content>
              </template>
            </template>
          </v-combobox>

          <v-divider></v-divider>
          <v-btn flat @click="$refs.form.reset(), clear()">Clear</v-btn>
          <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-combobox
            v-model="research.extra.Authors"
            :items="collaborators"
            prepend-icon="fa-user"
            chips
            hide-selected
            :auto-select-first="true"
            tags
            color="blue-grey lighten-2"
            label="Authors"
            item-text="fullname"
            item-value="fullname"
            multiple
            :return-object="false"
          >
            <template v-slot:selection="data">
              <v-chip
                :selected="data.selected"
                :key="JSON.stringify(data.item)"
                close
                :disabled="data.disabled"
                class="v-chip--select-multi"
                @click.stop="data.parent.selectedIndex = data.index"
                @input="data.parent.selectItem(data.item)"
              >
                <v-avatar class="accent">{{ data.index + 1 }}</v-avatar>
                {{ data.item }}
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
              </template>
            </template>
          </v-combobox>
          <v-text-field
            v-if="research.type === 'Ponencia' || research.type === 'Event'"
            prepend-icon="today"
            browser-autocomplete
            name="event"
            type="text"
            v-model="research.event"
            placeholder="Event"
          ></v-text-field>
          <v-layout
            v-if="research.type === 'Publicación' || research.type === 'Publication'"
            row
            wrap
          >
            <v-flex xs12 sm6 md6 lg6>
              <v-combobox
                :items="['Revista indizada en JCR', 'Revista indizada en otros índices']"
                prepend-icon="school"
                browser-autocomplete
                name="pub_type"
                type="text"
                clearable
                v-model="research.pub_type"
                label="Publication type"
              ></v-combobox>
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
              <v-text-field
                :items="['Revista indizada en JCR', 'Revista indizada en otros índices']"
                prepend-icon="school"
                browser-autocomplete
                name="pub_in"
                type="text"
                v-model="research.pub_in"
                label="Publicated in"
              ></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout v-if="research.type === 'Tesis' || research.type === 'Thesis'" row wrap>
            <v-flex xs12>
              <v-combobox
                prepend-icon="school"
                type="text"
                name="grade"
                v-model="research.grade"
                placeholder="Grade"
                label="Grade"
                :items="['Licenciatura', 'Doctorado', 'Postgrado']"
              ></v-combobox>
            </v-flex>
            <v-flex xs12>
              <v-combobox
                v-model="research.extra.Advisors"
                :items="collaborators"
                prepend-icon="fa-user"
                chips
                tags
                color="blue-grey lighten-2"
                label="Advisors"
                item-text="fullname"
                item-value="fullname"
                multiple
                :return-object="false"
              >
                <template v-slot:selection="data">
                  <v-chip
                    :selected="data.selected"
                    :key="JSON.stringify(data.item)"
                    close
                    :disabled="data.disabled"
                    class="v-chip--select-multi"
                    @click.stop="data.parent.selectedIndex = data.index"
                    @input="data.parent.selectItem(data.item)"
                  >
                    <v-avatar class="accent">{{ data.index + 1 }}</v-avatar>
                    {{ data.item }}
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
                  </template>
                </template>
              </v-combobox>
            </v-flex>
          </v-layout>
          <v-btn @click="e6 = 1" flat>Back</v-btn>
          <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-container id="input-usage" grid-list-xl fluid>
            <v-layout wrap>
              <v-flex xs12>
                <v-input
                  :messages="[research.Topics]"
                  append-icon="fa-check"
                  prepend-icon="school"
                >{{research.title}} ({{research.year}})</v-input>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon color="indigo">assignment</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{research.type}}</v-list-tile-title>
                  <v-list-tile-sub-title
                    v-if="research.type === 'Ponencia' || research.type === 'Presentation'"
                  >Event: {{research.event}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title
                    v-if="research.type === 'Tesis' || research.type === 'Thesis'"
                  >Grade: {{research.grade}}</v-list-tile-sub-title>
                  <v-list-tile-sub-title
                    v-if="research.type === 'Publication' || research.type === 'Publicación'"
                  >{{research.pub_type}}, {{research.pub_in}}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <br />
              <v-divider inset></v-divider>
              <v-list-tile v-for="(author, i) in research.extra.Authors" :key="author">
                <v-list-tile-action>{{i+1}}.</v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{author}}</v-list-tile-title>
                  <v-list-tile-sub-title>Author</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>person</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <br />
              <v-divider inset></v-divider>

              <v-list-tile v-for="(advisor, i) in research.extra.Advisors" :key="advisor">
                <v-list-tile-action>{{i+1}}.</v-list-tile-action>

                <v-list-tile-content>
                  <v-list-tile-title>{{advisor}}</v-list-tile-title>
                  <v-list-tile-sub-title>Advisor</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-icon>person</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list>
          </v-container>
          <v-btn v-if="!isLoading" @click="e6 = 2" flat>Back</v-btn>
          <v-btn v-if="!isLoading" color="primary" @click="publish()">Publish</v-btn>
          <Circle8 v-else />
        </v-stepper-content>
      </v-form>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import swal from "sweetalert2";
import Circle8 from "vue-loading-spinner/src/components/Circle";
import { mapState } from "vuex";
import appMixin from "@/mixins/init";
export default {
  mixins: [appMixin],
  components: {
    Circle8
  },
  computed: {
    ...mapState("research", ["research"]),
    ...mapState("projects", ["projects", "lines"]),
    ...mapState("colls", ["collaborators"]),
    ...mapState("partners", ["institutes"])
  },
  data: () => ({
    dialog: false,
    menu1: false,
    menu2: false,
    form: false,
    e6: 1,
    isLoading: false,
    types: ["Publicación", "Tesis", "Ponencia"],
    search: "",
    search2: "",
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
    clear() {
      this.$store.commit("research/clearResearch");
    },
    publish() {
      this.isLoading = true;
      console.log(this.project);
      this.$http.post("/researches", this.research).then(
        res => {
          swal.fire({
            position: "top-right",
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.e6 = 1;
          this.isLoading = false;
          this.research.extra.Authors = [];
          this.research.extra.Advisors = [];
          this.$refs.form.reset();
          this.clear();
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
          this.e6 = 1;
          this.isLoading = false;
        }
      );
    }
  }
};
</script>
