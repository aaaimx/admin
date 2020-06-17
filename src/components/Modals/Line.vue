<template>
  <el-button
    id="add-lines"
    icon="el-icon-plus"
    size="mini"
    circle
    @click="open"
  ></el-button>
</template>

<script>
import { createLine } from '@/api/project'
export default {
  methods: {
    created () {
      this.$store.commit('app/ADD_STEP', {
        element: '#add-lines',
        popover: {
          title: 'Create new Interest Area / Research Line',
          description:
            'You can quickly create new interest area just enter topic and save.',
          position: 'left'
        }
      })
    },
    open () {
      this.$prompt('Please input interest area', 'Topic', {
        confirmButtonText: 'OK',
        inputPattern: /^(?!\s*$).+/,
        cancelButtonText: 'Cancel'
      })
        .then(({ value }) => {
          createLine({ topic: value }).then(
            line => {
              this.$message({
                type: 'success',
                message: `Interest area: ${line.topic} is now avaliable`
              })
              this.$store.commit('projects/ADD_LINE', line)
            },
            err => {
              console.log(err)
            }
          )
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          })
        })
    }
  }
}
</script>
