import HomeView from '@/view/front/HomeView.vue'
import MasukView from '@/view/front/MasukView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/masuk', name: 'masuk', component: MasukView }
  ],
})

export default router
