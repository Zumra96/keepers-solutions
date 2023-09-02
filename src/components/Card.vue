<template>
  <div>
    <el-card class="box-card" style="width: 90%">
      <template #header>
        <el-row>
          <el-col class="space-between" :span="16">
            <div class="card-header">
              <h2>{{ data.name }}</h2>
              <span>{{ data.type }}</span>
            </div>
          </el-col>
          <el-col style="margin-top: 1.83rem" :span="8">
            <el-badge v-if="!data.active" value="Inactive" class="item"> </el-badge>
          </el-col>
        </el-row>

        <div></div>
      </template>
      <p>{{ data.description }}</p>
      <template v-for="user in data.users">
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="`${user.first_name} ${user.last_name}`"
          placement="top"
        >
          <img :src="user.photo_url!" :key="user.id!" />
        </el-tooltip>
      </template>
      <el-row>
        <el-col class="space-between" :span="16">
          <div>
            Date created: {{ dayjs(data.created_on).format('DD-MM-YYYY HH:mm:ss') }}
          </div> </el-col
        ><el-col class="space-between" :span="8">
          <div v-if="data.editable">
            <el-button plain>Edit</el-button>
            <el-popconfirm
              confirm-button-type="danger"
              @confirm="deleteRole(data)"
              :hide-icon="true"
              :width="300"
              title="Are you sure you want to delete this role?"
            >
              <template #reference>
                <el-button type="danger">Delete</el-button>
              </template>
            </el-popconfirm>
          </div>
          <div v-else>
            <el-icon :size="25">
              <Lock />
            </el-icon>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Role } from '@/dto/Role'
import dayjs from 'dayjs'
import { useStoreRoles } from '@/stores/storeRoles'
const emit = defineEmits(['deletedRole'])

const { data } = defineProps<{ data: Role }>()
const store = useStoreRoles()

const deleteRole = (data: Role) => {
  store.deleteRole(data)
  emit('deletedRole')
}
</script>

<style scoped>
img {
  padding: 5px;
  border-radius: 50%;
}
</style>
