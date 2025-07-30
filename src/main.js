import '@/assets/style.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import '@/axios';

import App from './App.vue';
import router from './router';
import axios from 'axios';
import { useUserStore } from './stores/user';
// import VueDatePicker from '@vuepic/vue-datepicker'
// import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

app.use(createPinia());
app.use(router);
const userStore = useUserStore();
if (localStorage.getItem('token')) {
  (async () => {
    try {
      const response = await axios.get('/user/get_data');
      userStore.setUserData(response.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }).call();
}

app.mount('#app');
