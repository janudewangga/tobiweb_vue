import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userData = ref(null)
  function setUserData (user) {
    userData.value = user;
  }

  return { userData, setUserData }
})
