<script setup>
import { RouterView } from 'vue-router';
import TopNav from './component/TopNav.vue';
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
