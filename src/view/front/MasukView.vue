<script setup>
import { reactive, ref } from 'vue';
const verrors = reactive({
  username: '',
  password: ''
});
const username = ref('');
const password = ref('');
async function doSubmit () {
  if (username.value.length === 0) {
    verrors.username = 'Username is required.';
  }
}
</script>
<template>
  <div class="row">
    <div class="col-sm-4">
      <div class="cards">
        <div class="card-body">
          <div class="mb-3">
            <label>Username</label>
            <input type="text" :class="['form-control', verrors.username ? 'is-invalid' : '']" v-model="username" maxlength="100">
            <div class="invalid-feedback">{{ verrors.username }}</div>
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" maxlength="100">
          </div>
          <button class="btn btn-primary" @click="doSubmit">Masuk</button>
        </div>
      </div>
    </div>
  </div>
</template>
