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
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 106px 1fr;
}

.header > .container > a {
  order: 2;
}

.header > .container > nav {
  order: 1;
}

@media (min-width: 1024px) {
  .header > .container > a {
    order: 1;
  }

  .header > .container > nav {
    order: 2;
  }
}
</style>
