<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  breadcrumbs: [{}]
});
</script>
<template>
  <nav class="breadcrumb-container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </li>
      <li v-for="breadcrumb in breadcrumbs" :class="['breadcrumb-item', breadcrumb.link ? '' : 'active']">
        <RouterLink v-if="breadcrumb.link" :to="breadcrumb.link">{{ breadcrumb.text }}</RouterLink>
        <span v-if="!breadcrumb.link">{{ breadcrumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>
