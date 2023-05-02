<template>
  <div class="about">
    <h1>This is  vue-demo</h1>
    <WujieVue :props="{name:'harrylj',age:29}" url="http://localhost:5174" name="vue3"></WujieVue> 子应用vue3
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
