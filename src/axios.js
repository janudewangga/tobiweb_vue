import axios from "axios";
// // import { useUserStore } from "./stores/user";
// // const userStore = useUserStore();
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common["Authorization"] = 'Bearer ' + localStorage.getItem('token');
