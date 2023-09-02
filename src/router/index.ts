import { createRouter, createWebHistory } from 'vue-router'
import CardsView from '@/views/CardsView.vue'
import EditCardView from '@/views/EditCardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: CardsView
    },
    {
      path: '/edit-card',
      name: 'editCard',
      component: EditCardView
    }
  ]
})

export default router
