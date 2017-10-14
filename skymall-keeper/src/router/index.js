
import Vue from 'vue'
import VueRouter from 'vue-router'
// pages
import Index from '@/pages/Index'
import About from '@/pages/About'
import UserIndex from '@/pages/user/Index'
import Users from '@/pages/user/Users'

Vue.use(VueRouter)

// 路由
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/user',
    name: 'UserIndex',
    component: UserIndex,
    children: [
      {
        path: '',
        name: 'Users',
        component: Users
      }
    ]
  }
]

// 滚动行为
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  routes
})

export default router
