<script setup>
import { RouterView } from 'vue-router';
import TopNav from './component/TopNav.vue';
import { useUserStore } from './stores/user';
import { onMounted } from 'vue';
import axios from 'axios';
const userStore = useUserStore();
onMounted(async () => {
  if (localStorage.getItem('token')) {
    try {
      const response = await axios.get('/user/get_data');
      userStore.setUserData(response.data);
    } catch (error) {
      alert(error.message);
    }
  }
})
</script>
<template>
  <TopNav />
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
