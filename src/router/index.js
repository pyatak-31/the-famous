import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    meta: { layout: 'Main' },
    component: () => import(/* webpackChunkName: "home" */ '@/views/MainView.vue')
  },
 
  { path: '/:notFound(.*)', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
