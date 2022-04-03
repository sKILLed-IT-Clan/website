<template>
  <header class="header">
    <div class="container">
      <Logo />
      <Nav />
    </div>
  </header>
</template>

<script>
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

export default {
  components: {
    Logo,
    Nav
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  padding: 0 36px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 106px 1fr;
}
</style>
