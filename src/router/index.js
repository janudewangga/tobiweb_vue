import DaftarView from '@/view/front/DaftarView.vue'
import DashboardView from '@/view/front/DashboardView.vue'
import HomeView from '@/view/front/HomeView.vue'
import MasukView from '@/view/front/MasukView.vue'
import SekolahMainView from '@/view/front/dashboard/sekolah/MainView.vue'
import UserMainView from '@/view/front/user/MainView.vue'
import UserTambahView from '@/view/front/user/TambahView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/daftar', name: 'daftar', component: DaftarView },
    { path: '/masuk', name: 'masuk', component: MasukView },
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
    { path: '/dashboard/sekolah', name: 'dashboard.sekolah.main', component: SekolahMainView },
    { path: '/dashboard/user', name: 'dashboard.user.main', component: UserMainView },
    { path: '/dashboard/user/tambah', name: 'dashboard.user.tambah', component: UserTambahView },
  ],
})

export default router
