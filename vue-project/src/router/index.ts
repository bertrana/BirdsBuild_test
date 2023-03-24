import { createRouter, createWebHistory } from 'vue-router'
import StockPageVue from '@/views/StockPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'stock',
      component: StockPageVue
    },
    {
      path: '/deals',
      name: 'deals',
      component: () => import('../views/DealsPage.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesPage.vue')
    }
  ]
})

export default router
