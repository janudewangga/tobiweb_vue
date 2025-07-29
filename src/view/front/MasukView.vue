<script setup>
import router from '@/router';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const verrors = reactive({
  username: '',
  password: '',
  error: ''
});
const username = ref('');
const password = ref('');
async function doSubmit () {
  verrors.username = '';
  verrors.password = '';
  verrors.error = '';
  let isValid = true;
  if (username.value.length === 0) {
    verrors.username = 'Username is required.';
    isValid = false;
  }
  if (password.value.length === 0) {
    verrors.password = 'Password is required.';
    isValid = false;
  }
  if (isValid) {
    try {
      const response = await axios.post('/user/get_token', {
        username: username.value,
        password: password.value
      });
      // console.log(response.data);
      localStorage.setItem('token', response.data.token);
      userStore.setUserData(response.data.user);
      router.push({ name: 'dashboard' });
    } catch (error) {
      alert(error.message);
    }
  }
}
</script>
<template>
  <h1>Masuk</h1>
  <div class="row">
    <div class="col-sm-4">
      <div class="cards">
        <div class="card-body">
          <div class="alert alert-danger" v-show="verrors.error">{{ verrors.error }}</div>
          <div class="mb-3">
            <label>Username</label>
            <input type="text" :class="['form-control', verrors.username ? 'is-invalid' : '']" v-model="username" maxlength="100">
            <div class="invalid-feedback">{{ verrors.username }}</div>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" :class="['form-control', verrors.password ? 'is-invalid' : '']" v-model="password" maxlength="100">
            <div class="invalid-feedback">{{ verrors.password }}</div>
          </div>
          <button class="btn btn-primary" @click="doSubmit">Masuk</button>
        </div>
      </div>
    </div>
  </div>
</template>
