<template>
  <div class="components-container">
    <h3>{{ title }}</h3>
      <el-select
        v-model="author"
        filterable
        remote
        reserve-keyword
        :remote-method="getData"
        :loading="loading"
        clearable
        placeholder="Selector author"
      >
        <el-option
          v-for="item in options"
          :key="item.fullname"
          :label="item.fullname"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-button icon="el-icon-plus" @click="addAuthor()" size="small"
        >Agregar author</el-button
      >
    <div class="editor-container">
      <dnd-list
        :list1="authors"
        :list2="list2"
        list1-title="Authors"
        list2-title=""
      />
    </div>
  </div>
</template>

<script>
import DndList from "@/components/DndList";
import { fetchList, fetch } from "@/api/member";
import { create, update } from "@/api/author";
import { mapState } from "vuex";

export default {
  name: "DndListDemo",
  components: { DndList },
  props: {
    title: {
      type: String,
      default: "list1"
    },
    authors: {
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
      author: ""
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
    async addAuthor() {
      if (!this.author.toString().trim()) return;
      let res = await fetch(this.author);
      const { fullname, id } = res;
      const researchId = this.$route.params.id;

      let exist = this.authors.filter(el => el.fullname == fullname);
      if (!exist.length) {
        const author = {
          fullname,
          member: id,
          research: researchId,
          position: this.authors.length + 1
        };
        let res = await create(author);
        let insertedAuthor = Object.assign({}, author, res)
        this.authors.push(insertedAuthor);
        console.log(insertedAuthor);
        console.log(this.authors);
      }
    }
  }
};
</script>
