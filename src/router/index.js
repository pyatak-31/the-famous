import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/catalog',
    name: 'catalog',
    meta: { layout: 'Main' },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/CatalogView.vue')
  },
 
  { path: '/:notFound(.*)', redirect: '/catalog' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
})

export default router
