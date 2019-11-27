import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { HOST } from '@/settings'
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
  {
    path: '/members',
    component: Layout,
    redirect: '/members/list',
    name: 'Members',
    meta: {
      title: 'Members',
      icon: 'people'
    },
    children: [
      {
        path: '/members/list',
        component: () => import('@/views/members/list'),
        name: 'MembersList',
        meta: { title: 'Member list', icon: 'list' }
      },
      {
        path: '/members/create',
        component: () => import('@/views/members/create'),
        name: 'CreateMember',
        meta: { title: 'Create member', icon: 'edit' }
      },
      {
        path: '/members/:id',
        component: () => import('@/views/members/edit'),
        name: 'EditMember',
        meta: { title: 'Edit member', activeMenu: '/members/:id' },
        hidden: true
      }
    ]
  },
  {
    path: '/projects',
    component: Layout,
    redirect: '/projects/list',
    name: 'Projects',
    meta: {
      title: 'Projects',
      icon: 'tree'
    },
    children: [
      {
        path: '/projects/list',
        component: () => import('@/views/projects/list'),
        name: 'ProjectsList',
        meta: { title: 'Project list', icon: 'list' }
      },
      {
        path: '/projects/create',
        component: () => import('@/views/projects/create'),
        name: 'CreateProject',
        meta: { title: 'Create project', icon: 'edit' }
      },
      {
        path: '/projects/:id',
        component: () => import('@/views/projects/edit'),
        name: 'EditProject',
        meta: { title: 'Edit project', activeMenu: '/projects/:id' },
        hidden: true
      }
    ]
  },
  {
    path: '/research',
    component: Layout,
    redirect: '/research/list',
    name: 'Research',
    meta: {
      title: 'Research',
      icon: 'education'
    },
    children: [
      {
        path: '/research/list',
        component: () => import('@/views/research/list'),
        name: 'ResearchList',
        meta: { title: 'Research list', icon: 'list' }
      },
      {
        path: '/research/create',
        component: () => import('@/views/research/create'),
        name: 'CreateResearch',
        meta: { title: 'Create research', icon: 'edit' }
      },
      {
        path: '/research/:id',
        component: () => import('@/views/research/edit'),
        name: 'EditResearch',
        meta: { title: 'Edit research', activeMenu: '/research/:id' },
        hidden: true
      }
    ]
  },
  // {
  //   path: '/user',
  //   component: Layout,
  //   redirect: '/user/list',
  //   name: 'User',
  //   meta: {
  //     title: 'User',
  //     roles: ['admin'],
  //     icon: 'peoples'
  //   },
  //   children: [
  //     {
  //       path: '/user/list',
  //       component: () => import('@/views/contacts/list'),
  //       name: 'ContactList',
  //       meta: {
  //         title: 'User List',
  //         icon: 'peoples'
  //       }
  //     }
  //     // {
  //     //   path: '/contact/:id',
  //     //   component: () => import('@/views/contact/edit'),
  //     //   name: 'EditMember',
  //     //   meta: { title: 'Edit Course', activeMenu: '/contact/:id' },
  //     //   hidden: true
  //     // }
  //   ]
  // },
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
    path: 'admin-link',
    component: Layout,
    children: [
      {
        path: `${HOST}/admin/`,
        meta: { title: 'AAAIMX Admin', icon: 'link' }
      }
    ]
  },
  {
    path: 'website-link',
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

const createRouter = () =>
  new Router({
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
