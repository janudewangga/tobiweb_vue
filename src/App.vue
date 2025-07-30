<script setup>
import { RouterView } from 'vue-router';
import TopNav from './component/TopNav.vue';
import { useUserStore } from './stores/user';
import { onBeforeMount, onMounted } from 'vue';
import axios from 'axios';
import BreadCrumb from './component/BreadCrumb.vue';
const userStore = useUserStore();
// if (localStorage.getItem('token')) {
//   (async () => {
//     try {
//       const response = await axios.get('/user/get_data');
//       userStore.setUserData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//     // console.log(userStore.userData);
//   }).call();
// }
</script>
<template>
  <TopNav />
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <pre class="text-end">{{ JSON.stringify(userStore.userData) }}</pre>
        <!-- <BreadCrumb :breadcrumbs="[{ text: 'Test1', link: '/dashboard' }, { text: 'Link2', link: null }]" /> -->
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
