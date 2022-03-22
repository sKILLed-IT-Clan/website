<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>

<style>
html {
  background-image: url('./assets/lights.jpg');
  background-position: center;
  height: 100vh;
  overflow-x: hidden;
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
