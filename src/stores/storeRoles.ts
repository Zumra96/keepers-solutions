import { ref } from 'vue'
import { defineStore } from 'pinia'
import data from '@/data/mockdata.json'

export const useStoreRoles = defineStore('storeRoles', () => {
  const roles = ref(data)
  //Not finished
  const addNewRole = (role: any)=> {
    roles.value.push(role)
  }
  const deleteRole = (role: any) => {
    roles.value = roles.value.filter(elemenet => elemenet.id !== role.id)
  }

  return { roles, addNewRole, deleteRole }
})
