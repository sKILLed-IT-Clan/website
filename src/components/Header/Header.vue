<template>
  <header class="header">
    <!-- <div class="container"> -->
      <Logo />
      <Nav />
    <!-- </div> -->
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

@media (max-width: 1024px) {
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #FFF;
    padding: 1em;
  }
}

@media (min-width: 1024px) {
  .header {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 106px 1fr;
  }
}

.header > a {
  order: 2;
}

.header > nav {
  order: 1;
}

@media (min-width: 1024px) {
  .header > a {
    order: 1;
  }

  .header > nav {
    order: 2;
  }
}
</style>
