<template>
  <div class="components-container">
    <h3>{{ title }}</h3>
      <el-select
        v-model="advisor"
        filterable
        remote
        reserve-keyword
        :remote-method="getData"
        :loading="loading"
        clearable
        placeholder="Selector advisor"
      >
        <el-option
          v-for="item in options"
          :key="item.fullname"
          :label="item.fullname"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-button icon="el-icon-plus" @click="addAdvisor()" size="small"
        >Add advisor</el-button
      >
    <div class="editor-container">
      <dnd-list
        :list1="advisors"
        :list2="list2"
        list1-title="Authors"
        list2-title=""
      />
    </div>
  </div>
</template>

<script>
import DndList from "./DndList";
import { fetchList, fetch } from "@/api/member";
import { create, update } from "@/api/advisor";
import { mapState } from "vuex";

export default {
  name: "DndListDemo",
  components: { DndList },
  props: {
    title: {
      type: String,
      default: "list1"
    },
    advisors: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      list1: [],
      list2: [],
      options: [],
      loading: false,
      advisor: ""
    };
  },
  created() {
    this.getData();
  },
  computed: {
    ...mapState("members", ["collaborators"])
  },
  methods: {
    getData(fullname) {
      this.loading = true;
      fetchList({ fullname }).then(response => {
        this.options = response.results;
        this.loading = false;
      });
    },
    async addAdvisor() {
      if (!this.advisor.toString().trim()) return;
      let res = await fetch(this.advisor);
      const { fullname, id } = res;
      const researchId = this.$route.params.id;
      let exist = this.advisors.filter(el => el.fullname == fullname);
      if (!exist.length) {
        const advisor = {
          fullname,
          member: id,
          research: researchId,
          position: this.advisors.length + 1
        };
        let res = await create(advisor);
        let insertedAdvisor = Object.assign({}, advisor, res)
        this.advisors.push(insertedAdvisor);
        console.log(insertedAdvisor);
        console.log(this.advisors);
      }
    }
  }
};
</script>
