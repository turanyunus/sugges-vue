import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Explore from '../views/explore'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile'),
    children: [
      {
        path: '',
        name: 'ProfilePost',
        component: () => import('../views/profile/post')
      },
      {
        path: 'activity',
        name: 'ProfileActivity',
        component: () => import('../views/profile/activity')
      }
    ]
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
