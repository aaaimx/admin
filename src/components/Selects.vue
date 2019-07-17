<template>
  <div id="page-selects">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12 xs12>
          <v-widget title="Mulitple Selection">
            <div slot="widget-content">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-subheader>Tags</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="countries"
                      v-model="multi1"
                      label="Select"
                      multi-line
                      item-text="country"
                      item-value="abbr"
                      return-object
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Slots - Closable chips</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-combobox
                      label="Select"
                      :items="items"
                      chips
                      tags
                      v-model="multi4"
                      multi-line
                      autocomplete
                      :loading="loading"
                      :search-input.sync="search"
                      multiple
                      cache-items
                      item-text="lastname"
                      :rules="[() => multi4.length > 0 || 'You must choose at least one']"
                      item-value="uuid"
                      return-object
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          close
                          @input="data.parent.selectItem(data.item.uuid)"
                          class="chip--select-multi"
                          :selected="data.selected"
                          :key="JSON.stringify(data.item.lastname)"
                        >
                          <v-avatar class="accent">{{ data.item.lastname.slice(0, 1).toUpperCase() }}</v-avatar>
                          {{ data.item.lastname }}, {{ data.item.name }}
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import Countries from "@/api/country";
import trae from "trae";
export default {
  components: {
    VWidget
  },
  data() {
    return {
      loading: true,
      items: [],
      search: null,
      select: [],
      e1: null,
      e2: null,
      e3: null,
      e4: null,
      e5: null,
      e6: null,
      e7: null,
      multi1: [],
      multi2: [],
      multi3: [],
      multi4: [],
      multi5: [],
      countries: Countries
    };
  },
  computed: {},
  created() {
    trae.get("https://aaaimx-api.herokuapp.com/collaborators").then(
      res => {
        console.log(res.data.rows);
        res.data.rows.forEach((element, i, arr) => {
            arr[i] = {
                name: element.name,
                lastname: element.lastname,
                uuid: element.uuid
            }
        });
        this.loading = false
        this.items = res.data.rows;
      },
      err => {
        console.log(err);
      }
    );
  },
  watch: {
    search(val) {
      val && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.countries.filter(e => {
          return (
            (e.country || "").toLowerCase().indexOf((v || "").toLowerCase()) >
            -1
          );
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>