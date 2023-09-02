<template>
  <div>
    <el-card class="box-card center-element">
      <template #header>
        <h2>Add New Role</h2>
      </template>
      <div>
        <el-button @click="goBack">
          Cancel
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';

const goBack = () => {
  router.push('/')

}

</script>

<style scoped>
img {
  padding: 5px;
  border-radius: 50%;
}

.center-element {
  width: 40%;
  margin: 0 auto;
}
</style>
