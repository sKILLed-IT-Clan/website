<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <div class="games">
      <div class="warzone">
        <img src="@/assets/warzone-logo.svg" />
        <img src="@/assets/soldier.svg" />
      </div>

      <Logo />

      <div class="apex">
        <img src="@/assets/apex-logo.svg" />
        <img src="@/assets/caustic.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo/Logo'

export default {
  name: 'Join',

  components: {
    Logo
  },

  data () {
    return {
      msg: 'Choose A Roster'
    }
  }
}
</script>

<style scoped>
.container {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  max-width: 1400px;
  margin: 0 auto;
  grid-template-columns: 1fr 2fr 1fr;
}

h1 {
  margin: 80px auto;
  -webkit-text-stroke: 0.125px #fff;
  font-family: Audiowide;
  font-size: 42px;
  line-height: 1.43;
  color: #000;
}

.games {
  display: flex;
  gap: 20px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

.games .logo {
  width: 100%;
  max-width: 313px !important;
}
</style>
