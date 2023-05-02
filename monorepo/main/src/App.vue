<template>
  <div>
    <h2>这是主应用</h2>
      <router-link to="/vueDemo" > vue3</router-link>
      <router-link to="/reactDemo" > react</router-link>
      <router-view></router-view>
      <!-- <WujieVue url="http://localhost:5174" name="vue3"></WujieVue> 子应用vue3 -->
      <!-- <WujieVue url="http://localhost:5175" name="react"></WujieVue> 子应用react -->
      <!-- <wujievue url="http://localhost:5174" name="vue3"></wujievue> 子应用vue3
      <wujievue url="http://localhost:5175" name="react"></wujievue> 子应用vue3 -->
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, onMounted, getCurrentInstance } from 'vue'


</script>
<style scoped>
</style>