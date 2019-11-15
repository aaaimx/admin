<template>
  <CourseDetail :is-edit="true" />
</template>

<script>
import CourseDetail from './components/CourseDetail'

export default {
  name: 'EditForm',
  components: { CourseDetail }
}
</script>

