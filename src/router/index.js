import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { getToken } from '@/utils/auth'

Vue.use(Router)

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    redirect: '/home',
    component: () =>
      import(/* webpackChunkName: "default" */ '@/layouts/default.vue'),
    children: [
      {
        // Document title tag
        // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
        meta: {
          title: 'Dashboard'
        },
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/Home.vue')
      },
      {
        meta: {
          title: 'Profile'
        },
        path: '/profile',
        name: 'profile',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
      },
      {
        meta: {
          title: 'New Certificate'
        },
        path: '/certificates/new',
        name: 'certificate.new',
        component: () =>
          import(
            /* webpackChunkName: "certificate-form" */ '../views/certificates/Form.vue'
          )
      },
      {
        meta: {
          title: 'Edit Certificate'
        },
        path: '/certificates/:id',
        name: 'certificate.edit',
        component: () =>
          import(
            /* webpackChunkName: "certificate-form" */ '../views/certificates/Form.vue'
          ),
        props: true
      },
      {
        meta: {
          title: 'Edit Event'
        },
        path: '/events/:id',
        name: 'event.edit',
        component: () =>
          import(
            /* webpackChunkName: "event-form" */ '../views/events/EventDetail.vue'
          ),
        props: true
      }
    ]
  },
  {
    path: '/full-page',
    component: () =>
      import(/* webpackChunkName: "full-page" */ '../layouts/fullpage.vue'),
    children: [
      {
        meta: {
          title: 'Login',
          isPublic: true
        },
        path: '/login',
        name: 'login',
        component: () =>
          import(
            /* webpackChunkName: "full-page" */ '../views/full-page/Login.vue'
          )
      },
      {
        meta: {
          title: 'Error 404',
          isPublic: true
        },
        path: '/404',
        name: '404NotFound',
        component: () =>
          import(
            /* webpackChunkName: "full-page" */ '../views/full-page/Error.vue'
          ),
        props: { isInCard: false }
      },
      {
        meta: {
          title: 'Lock screen'
        },
        path: '/lock',
        name: 'lock-screen',
        component: () =>
          import(
            /* webpackChunkName: "full-page" */ '../views/full-page/LockScreen.vue'
          )
      }
    ]
  },
  { path: '*', redirect: '/404' }
]

const router = new Router({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach(async (to, from, next) => {
  // determine whether the user has logged in
  const token = getToken()

  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      try {
        // get user info
        await store.dispatch('refreshToken')
        // const decoded = decodeToken(token)
        next()
      } catch (error) {
        console.log(error)
        // remove token and go to login page to re-login
        await store.dispatch('logout')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    /* has no token */
    if (to.meta.isPublic) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

export default router
