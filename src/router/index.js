import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/collaborators/Dashboard'
import Projects from '@/components/projects/Dashboard'
import Login from '@/pages/Login'
import Error404 from '@/pages/404'


const isAuthenticated = () => {
  return window.sessionStorage.access_token
}

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: { breadcrumb: true },
      beforeRouteEnter(to, from, next) {
        if (isAuthenticated()) {
          next()
        }
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { breadcrumb: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { public: true },
      beforeRouteEnter() {
        window.sessionStorage.clear()
      }
    },
    {
      path: '*',
      name: '404NotFound',
      component: Error404,
      meta: { public: true },
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.public && !isAuthenticated()) {
    return next({ name: 'Login' })
  }

  return next()
})


export default router