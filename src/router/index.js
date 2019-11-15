import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

/* Layout */
import Layout from '@/layout'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    meta: { public: true },
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    meta: { public: true },
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    meta: { public: true },
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    meta: { public: true },
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/courses',
  //   component: Layout,
  //   redirect: '/courses/list',
  //   name: 'Courses',
  //   meta: {
  //     title: 'Courses',
  //     icon: 'education'
  //   },
  //   children: [
  //     {
  //       path: '/courses/list',
  //       component: () => import('@/views/courses/list'),
  //       name: 'CoursesList',
  //       meta: { title: 'Courses List', icon: 'list' }
  //     },
  //     {
  //       path: '/courses/create',
  //       component: () => import('@/views/courses/create'),
  //       name: 'CreateArticle',
  //       meta: { title: 'Create course', icon: 'edit' }
  //     },
  //     {
  //       path: '/courses/:id',
  //       component: () => import('@/views/courses/edit'),
  //       name: 'EditArticle',
  //       meta: { title: 'Edit Course', activeMenu: '/courses/:id' },
  //       hidden: true
  //     }
  //   ]
  // },
  {
    path: '/contact',
    component: Layout,
    redirect: '/contact/list',
    name: 'Contact',
    meta: {
      title: 'Contact',
      icon: 'peoples'
    },
    children: [
      {
        path: '/user/list',
        component: () => import('@/views/contacts/list'),
        name: 'ContactList',
        meta: { title: 'User List', icon: 'peoples' }
      }
      // {
      //   path: '/contact/:id',
      //   component: () => import('@/views/contact/edit'),
      //   name: 'EditArticle',
      //   meta: { title: 'Edit Course', activeMenu: '/contact/:id' },
      //   hidden: true
      // }
    ]
  },
  // {
  //   path: 'documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'http://0.0.0.0:3000/documentation',
  //       meta: { title: 'Documentation', icon: 'documentation' }
  //     }
  //   ]
  // },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://aaaimx-admin.herokuapp.com/',
        meta: { title: 'AAAIMX Admin', icon: 'link' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://www.aaaimx.org',
        meta: { title: 'www.aaaimx.org', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true, meta: { public: true } }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  if (!to.meta.public) {
    store.dispatch('user/inspectToken')
  }
  next()
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
