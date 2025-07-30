import { useUserStore } from '@/stores/user'
import DaftarView from '@/view/front/DaftarView.vue'
import DashboardView from '@/view/front/DashboardView.vue'
import HomeView from '@/view/front/HomeView.vue'
import MasukView from '@/view/front/MasukView.vue'
import SekolahMainView from '@/view/front/dashboard/sekolah/MainView.vue'
import UserMainView from '@/view/front/dashboard/user/MainView.vue'
import UserTambahView from '@/view/front/dashboard/user/TambahView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/daftar', name: 'daftar', component: DaftarView },
    { path: '/masuk', name: 'masuk', component: MasukView, meta: { requiresAuthReverse: true } },
    { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } },
    { path: '/dashboard/sekolah', name: 'dashboard.sekolah.main', component: SekolahMainView, meta: { requiresAuth: true } },
    { path: '/dashboard/user', name: 'dashboard.user.main', component: UserMainView, meta: { requiresAuth: true } },
    { path: '/dashboard/user/tambah', name: 'dashboard.user.tambah', component: UserTambahView, meta: { requiresAuth: true } },
  ],
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isLoggedIn = userStore.userData.id !== null;
  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: 'masuk' });
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isLoggedIn = userStore.userData.id !== null;
  if (to.meta.requiresAuthReverse && isLoggedIn) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});
export default router
