<script setup>
import { reactive, ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
const verrors = reactive({
  error: '',
  typeOfIdentity: '',
  identity: '',
  name: '',
  codename: '',
  sex: '',
  dateOfBirth: '',
  address: '',
  phone: '',
  email: '',
  username: '',
  password: '',
  role: '',
  status: ''
});
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
const role = ref('');
const status = ref('');
</script>
<template>
  <h1>Tambah user</h1>
  <div class="card">
    <div class="card-body">
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Tipe identitas</label>
        <div class="col-sm-3">
          <select name="type_of_identity" :class="['form-control', verrors.typeOfIdentity ? 'is-invalid' : '']" v-model="typeOfIdentity">
            <option value="KTP">KTP</option>
            <option value="NIK">NIK</option>
            <option value="NISN">NISN</option>
          </select>
          <div class="invalid-feedback">{{ verrors.typeOfIdentity }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Identity</label>
        <div class="col-sm-4">
          <input type="text" class="form-control" v-model="identity">
          <div class="invalid-feedback">{{ verrors.identity }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-5">
          <input type="text" class="form-control" v-model="name">
          <div class="invalid-feedback">{{ verrors.name }}</div>
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Sex</label>
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
        <label class="col-sm-2 col-form-label">Date of birth</label>
        <div class="col-sm-3">
          <Datepicker v-model="dateOfBirth" format="yyyy-MM-dd" :enable-time-picker="false" />
          <div class="invalid-feedback">{{ verrors.dateOfBirth }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
