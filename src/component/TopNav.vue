<script setup>
import router from '@/router';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
async function doLogout () {
  localStorage.removeItem('token');
  userStore.clearUserData();
  router.push({ name: 'masuk' });
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">TobiWeb</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item" v-show="!userStore.userData.id">
            <RouterLink class="nav-link" to="/masuk">Masuk</RouterLink>
          </li>
          <li class="nav-item" v-show="userStore.userData.id">
            <RouterLink class="nav-link" to="/dashboard">Dashboard</RouterLink>
          </li>
          <li class="nav-item" v-show="userStore.userData.id && ['administrator'].indexOf(userStore.userData.role) > -1">
            <RouterLink class="nav-link" :to="{ name: 'dashboard.sekolah.main' }">Sekolah</RouterLink>
          </li>
          <li class="nav-item" v-show="userStore.userData.id && ['superadmin'].indexOf(userStore.userData.role) > -1">
            <RouterLink class="nav-link" :to="{ name: 'dashboard.user.main' }">User</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-show="userStore.userData.id">
            <a class="nav-link text-danger" href="#" @click="doLogout">Keluar</a>
          </li>
          <li class="nav-item" v-show="!userStore.userData.id">
            <RouterLink class="nav-link" to="/daftar">Daftar</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
