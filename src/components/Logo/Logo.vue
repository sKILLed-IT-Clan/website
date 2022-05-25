<template>
  <router-link to="/" class="logo">
    <img
      class="logo__img"
      src="../../assets/logo.svg" />
  </router-link>
</template>

<style scoped>
  .logo {
    width: 25%;
    margin-right: 95px;
    order: 1;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    .logo {
      width: 100%;
      order: 2;
      margin-right: 50px;
    }
  }
</style>
