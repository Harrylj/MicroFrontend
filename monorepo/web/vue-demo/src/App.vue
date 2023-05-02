<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

const send = () => {
  console.log(window.parent.a)
}
const getProps = () => {
  console.log(window.$wujie.props)
}
const emitGo = () => {
  window.$wujie.bus.$emit('vue3',{name:'harrylj emit',age:'29'})
}
</script>

<template>
  <button @click="send()">window.parent获取主应用数据</button>
  <button @click="getProps()">$wujie获取主应用数据</button>

  <button @click="emitGo()">子应用通过emit触发事件(反之也可以主应用emit触发事件子应用on监听)</button>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
