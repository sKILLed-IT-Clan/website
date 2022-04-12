<template>
  <div id="app" v-bind:class="getClass()">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  methods: {
    getClass () {
      const path = this.$route.path
      let className = ''

      if (path.split('/')[1]) {
        className = path.split('/')[1]
      } else {
        className = 'home'
      }

      return className
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'Audiowide';
  src: local('Audiowide'),
   url('~@/assets/fonts/Audiowide-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Montserrat';
  src: local('Montserrat'),
   url('~@/assets/fonts/Montserrat-Regular.ttf') format('truetype');
}

#app {
  background-position: center;
  height: 100vh;
  overflow-x: hidden;
}

.home {
  background-image: url('./assets/lights.jpg');
}

.join {
  background-image: url('./assets/smoke.jpg');
}

.leaders {
  background-image: url('./assets/leaders.png');
}

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

body {
  margin: 0 auto;
}
</style>
