<template>
  <el-button icon="el-icon-plus" size="mini" circle @click="open"></el-button>
</template>

<script>
import { createLine } from "@/api/project";
export default {
  methods: {
    open() {
      this.$prompt("Please input interest area", "Topic", {
        confirmButtonText: "OK",
        inputPattern: /^(?!\s*$).+/,
        cancelButtonText: "Cancel"
      })
        .then(({ value }) => {
          createLine({ topic: value }).then(
            line => {
              this.$message({
                type: "success",
                message: `Interest area: ${line.topic} is now avaliable`
              });
              this.$store.commit('projects/ADD_LINE', line)
            },
            err => {
              console.log(err);
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Input canceled"
          });
        });
    }
  }
};
</script>
