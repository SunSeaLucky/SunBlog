import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MemoryMuseum',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Resources',
    name: 'resources',
    component: () => import('../views/Resources.vue')
  },
  {
    path: "/Resources/MathematicsModeling",
    name: "mathematics_modeling",
    component: () => import('../views/Resources/MathematicsModeling.vue')
  },
  {
    path: "/BecomeCapitalist",
    name: "become_capitalist",
    component: () => import('../views/BecomeCapitalistView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
