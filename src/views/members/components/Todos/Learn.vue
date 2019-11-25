<template>
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <el-input type="text" v-model="newTodo" placeholder="Please input">
        <template slot="append">
          <el-button @click.prevent="addTodo" type="danger" icon="el-icon-plus" circle></el-button>
        </template>
      </el-input>
    </header>
    <!-- main section -->
    <section v-show="postForm.subject.length" class="main">
      <ul class="todo-list">
        <li v-for="(todo, index) in postForm.subject" :key="index" class="todo">
          <div class="view">
            <label v-text="todo" />
            <button class="destroy" @click="deleteTodo( todo )" />
          </div>
        </li>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer">
      <span class="todo-count">
        <strong>{{ postForm.subject.length }}</strong>
        {{ postForm.subject.length | pluralize('item') }} left
      </span>
    </footer>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  filters: {
    pluralize: (n, w) => (n === 1 ? w : w + "s"),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  },
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    ...mapState("members", ["postForm"])
  },
  methods: {
    addTodo() {
      const text = this.newTodo;
      if (text.trim()) {
        this.$store.commit("members/ADD_SUBJECT", text);
      }
      this.newTodo = "";
    },
    deleteTodo(todo) {
      this.$store.commit("members/DELETE_SUBJECT", todo);
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
