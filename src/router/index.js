import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/chart01',
    name: 'chart01',
    component: function () {
      return import('../views/chart01')
    }
  },
  {
    path: '/chart02',
    name: 'chart02',
    component: function () {
      return import('../views/chart02')
    }
  },
  {
    path: '/chart03',
    name: 'chart03',
    component: function () {
      return import('../views/chart03')
    }
  },
  {
    path: '/chart04',
    name: 'chart04',
    component: function () {
      return import('../views/chart04')
    }
  },
  {
    path: '/chart05',
    name: 'chart05',
    component: function () {
      return import('../views/chart05')
    }
  },
  {
    path: '/chart06',
    name: 'chart06',
    component: function () {
      return import('../views/chart06')
    }
  },
  {
    path: '/chart07',
    name: 'chart07',
    component: function () {
      return import('../views/chart07')
    }
  },
  {
    path: '/chart08',
    name: 'chart08',
    component: function () {
      return import('../views/chart08')
    }
  },
  {
    path: '/chart09',
    name: 'chart09',
    component: function () {
      return import('../views/chart09')
    }
  },
  {
    path: '/chart10',
    name: 'chart10',
    component: function () {
      return import('../views/chart10')
    }
  },
  {
    path: '/chart11',
    name: 'chart11',
    component: function () {
      return import('../views/chart11')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
