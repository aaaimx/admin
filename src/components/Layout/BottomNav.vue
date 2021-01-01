<template>
  <nav class="navbar is-fixed-bottom is-hidden-tablet">
    <div class="navbar-brand is-flex is-justify-content-space-around">
      <router-link
        v-for="item in menuList"
        :key="item.name"
        tag="a"
        class="navbar-item"
        :to="item.to"
      >
        <b-icon :type="{'is-white': $route.name !== item.name}" :icon="item.icon"></b-icon>
      </router-link>
    </div>
  </nav>
</template>

<script>
import menuList from '@/router/menus/mobile'
export default {
  data () {
    return {
      menuList
    }
  }
}
</script>
