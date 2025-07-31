<script setup>
import { onMounted, reactive, ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useUserStore } from '@/stores/user';
import axios from 'axios';
const userStore = useUserStore();
const verrors = reactive({});
const typeOfIdentity = ref('NIK');
const identity = ref('');
const name = ref('');
const codename = ref('');
const sex = ref('0');
const dateOfBirth = ref('');
const address = ref('');
const phone = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const password_confirmation = ref('');
const role = ref('');
const status = ref('');
const allowedRoles = ref([]);
onMounted(() => {
  console.log(userStore.userData);
  if (userStore.userData.role === 'superadmin') {
    role.value = 'administrator';
  }
})
async function doSubmit () {
  for (const key in verrors) {
    verrors[key] = '';
  }
  let isValid = true;
  if (typeOfIdentity.value.length === 0) {
    isValid = false;
    verrors.typeOfIdentity = 'Tipe identitas harus diisi.';
  }
  if (identity.value.length === 0) {
    isValid = false;
    verrors.identity = 'Identitas harus diisi.';
  }
  if (name.value.length === 0) {
    isValid = false;
    verrors.name = 'Nama harus diisi.';
  }
  if (address.value.length === 0) {
    isValid = false;
    verrors.address = 'Alamat harus diisi.';
  }
  if (email.value.length === 0) {
    isValid = false;
    verrors.email = 'Email harus diisi.';
  }
  if (isValid) {
    try {
      const response = await axios.post('/user', {
        type_of_identity: typeOfIdentity.value
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
<template>
  <h1>Tambah user</h1>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Akses</label>
        <div class="col-sm-3">
          <select name="role" :class="['form-control', verrors.role ? 'is-invalid' : '']" v-model="role">
            <option value="administrator" v-show="['superadmin'].indexOf(userStore.userData.role) > -1">ADMINISTRATOR</option>
            <option value="operator" v-show="['administrator'].indexOf(userStore.userData.role) > -1">OPERATOR</option>
            <option value="school" v-show="['administrator', 'operator'].indexOf(userStore.userData.role) > -1">SEKOLAH</option>
          </select>
          <div class="invalid-feedback">{{ verrors.typeOfIdentity }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Tipe identitas</label>
        <div class="col-sm-3">
          <select name="type_of_identity" :class="['form-control', verrors.typeOfIdentity ? 'is-invalid' : '']" v-model="typeOfIdentity">
            <option value="KTP">KTP</option>
            <option value="NIK">NIK</option>
            <option value="NISN">NISN</option>
            <option value="NPSN">NPSN</option>
          </select>
          <div class="invalid-feedback">{{ verrors.typeOfIdentity }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Identitas</label>
        <div class="col-sm-4">
          <input type="text" :class="['form-control', verrors.identity ? 'is-invalid' : '']" v-model="identity">
          <div class="invalid-feedback">{{ verrors.identity }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Nama</label>
        <div class="col-sm-5">
          <input type="text" :class="['form-control', verrors.name ? 'is-invalid' : '']" v-model="name">
          <div class="invalid-feedback">{{ verrors.name }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Jenis kelamin</label>
        <div class="col-sm-2">
          <select name="sex" class="form-control" v-model="sex">
            <option value="0">&dash;</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <div class="invalid-feedback">{{ verrors.sex }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Tanggal lahir</label>
        <div class="col-sm-3">
          <Datepicker v-model="dateOfBirth" format="yyyy-MM-dd" :enable-time-picker="false" />
          <div class="invalid-feedback">{{ verrors.dateOfBirth }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Alamat</label>
        <div class="col-sm-6">
          <input type="text" :class="['form-control', verrors.address ? 'is-invalid' : '']" v-model="address">
          <div class="invalid-feedback">{{ verrors.address }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Phone</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" v-model="phone">
          <div class="invalid-feedback">{{ verrors.phone }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-5">
          <input type="text" :class="['form-control', verrors.email ? 'is-invalid' : '']" v-model="email">
          <div class="invalid-feedback">{{ verrors.email }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Username</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" v-model="username">
          <div class="invalid-feedback">{{ verrors.username }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-4">
          <input type="password" class="form-control" v-model="password">
          <div class="invalid-feedback">{{ verrors.password }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Konfirmasi password</label>
        <div class="col-sm-4">
          <input type="password" class="form-control" v-model="password_confirmation">
          <div class="invalid-feedback">{{ verrors.password_confirmation }}</div>
        </div>
      </div>
      <div class="row">
        <div class="offset-sm-2 col-sm-10">
          <button class="btn btn-primary" @click.prevent="doSubmit">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>
