<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h2>User Roles Management</h2>
        </div>
        <div class="flex flex-wrap">
          <el-row :gutter="20">
            <el-col :span="5">
              <div>
                <el-input v-model="searchValue" placeholder="Search roles" size="large" />
              </div>
            </el-col>
            <el-col :span="5">
              <div>
                <el-select
                  style="width: 100%"
                  v-model="selectedOption"
                  @change="filterByActivity"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
            </el-col>
            <el-col :span="8">
              <div>
                <el-button type="primary" size="large" @click="createNewRole">Create New Role</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </template>
      <div>
        <el-row class="row-bg" justify="space-around">
          <template v-for="role in rolesData" :key="role.id" class="text item">
            <el-col class="space-between" :span="8">
              <Card @deletedRole="deletedRole" :data="role"></Card>
            </el-col>
          </template>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import roles from '@/data/mockdata.json'
import Card from '@/components/Card.vue'
import type { Role } from '@/dto/Role'
import { ref, watch } from 'vue'
import router from '@/router';
import { useStoreRoles } from '@/stores/storeRoles'

const options = ref([
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Active and Inactive', value: 'both' }
])
const store = useStoreRoles()

const selectedOption = ref<string>('both')
const searchValue = ref<string>('')
const rolesData = ref<Role[]>(store.roles)

const filterByActivity = (value: string) => {
  rolesData.value = store.roles
  rolesData.value = rolesData.value.filter((element) => {
    if (selectedOption.value === 'active') {
      return element.active
    } else if (selectedOption.value === 'inactive') {
      return !element.active
    }
  })
  if (selectedOption.value === 'both') rolesData.value = store.roles
}

watch(searchValue, async (newValue, oldValue) => {
  if (newValue.length < oldValue.length) rolesData.value = store.roles
  rolesData.value = rolesData.value.filter((item) => {
    return item.name!.toLocaleLowerCase().includes(newValue.toLocaleLowerCase())
  })
  if (!newValue) rolesData.value = store.roles
})

const createNewRole = () => {
  router.push('/edit-card')
}

const deletedRole = () => {
  rolesData.value = store.roles
}
</script>
<style scoped>
.space-between {
  padding-bottom: 30px !important;
}
</style>
