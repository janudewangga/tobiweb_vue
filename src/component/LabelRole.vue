<script setup>
const props = defineProps(['role']);
</script>
<template>
  <small v-if="role === 'administrator'" class="badge text-bg-primary">{{ role.toUpperCase() }}</small>
</template>
