import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userData = reactive({
    id: null,
    photo: null,
    name: null,
    role: null
  })
  const tokenData = ref(null)
  function clearUserData () {
    userData.id = null;
    userData.photo = null;
    userData.name = null;
    userData.role = null;
  }
  function setUserData (user) {
    userData.id = user.id;
    userData.photo = user.photo;
    userData.name = user.name;
    userData.role = user.role;
  }
  function setTokenData (token) {
    tokenData.value = token
  }

  return { userData, tokenData, clearUserData, setUserData, setTokenData }
})
