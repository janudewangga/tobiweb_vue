<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = reactive({});
async function loadUser () {
  try {
    const response = await axios.get('/user/' + route.params.id);
    // user.name = response.data.name;
    // user.address = response.data.address;
    // user.phone = response.data.phone;
    const udata = response.data;
    user.id = udata.id;
    user.name = udata.name;
    user.address = udata.address;
    user.phone = udata.phone;
  } catch (error) {
    console.log(error);
  }
}
loadUser();
</script>
<template>
  <h1>Lihat user</h1>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
        <div class="card-body">
          <p>
            <strong>Nama</strong>: {{ user.name }}<br />
            <strong>Alamat</strong>: {{ user.address }}<br />
            <strong>Telepon</strong>: {{ user.phone }}<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
