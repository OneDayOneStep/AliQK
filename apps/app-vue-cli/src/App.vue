<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <router-link to="/page_A" class="rLink">PAGE_A</router-link>
    <router-link to="/page_B" class="rLink">PAGE_B</router-link>
  </div>
  <div style="font-size: 5vw;">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.rLink {
  display: inline-block;
  margin: 10px;
  background-color: #35495e;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
}
</style>
