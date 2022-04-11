<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Hero',

  data () {
    return {
      msg: 'Our organization began with a vision, but the story is still being written'
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 170px 14px 0;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 50px;
  font-style: italic;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.2;
  text-align: center;
  color: #ebeded;
}

@media (min-width: 1024px) {
  h1 {
    margin: 202.8px 88px 262px 41.1px;
  }
}

@media (min-width: 1200px) {
  h1 {
    margin: 284px 180px 432px 208px;
  }
}
</style>
