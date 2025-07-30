<script setup>
import { useUserStore } from '@/stores/user';
import axios from 'axios';
import { onBeforeMount, onMounted, ref } from 'vue';
import LabelRole from '@/component/LabelRole.vue';
const userStore = useUserStore();
const users = ref([]);
async function loadUsers () {
  try {
    const response = await axios.get('/user', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    });
    users.value = await response.data;
  } catch (error) {
    users.value = [];
    alert(error.message);
  }
}
onMounted(() => {
  loadUsers();
})
</script>
<template>
  <h1>User</h1>
  <p v-if="['superadmin', 'administrator', 'operator', 'school']">
    <RouterLink class="btn btn-success" :to="{ name: 'dashboard.user.tambah' }">Tambah</RouterLink>
  </p>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Telepon</th>
          <th>Akses</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obj in users" :key="obj.id">
          <td>{{ obj.name }}</td>
          <td>{{ obj.phone }}</td>
          <td>
            <LabelRole :role="obj.role"></LabelRole>
          </td>
          <td>{{ obj.status.toUpperCase() }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
