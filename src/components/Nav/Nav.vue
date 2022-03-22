<template>
  <ul>
    <li>
      <router-link to="/about">About Us</router-link>
    </li>
    <li>
      <router-link to="/history">Our History</router-link>
    </li>
    <li>
      <router-link to="/leaders">Meet Our Leaders</router-link>
    </li>
    <li>
      <router-link to="/roster">Competitive Roster</router-link>
    </li>
    <li>
      <router-link to="/join">Join sKILLed-IT</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  gap: 34px;
}

li {
  margin: 0 auto;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 25px;
  text-align: center;
  align-self: center;
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
