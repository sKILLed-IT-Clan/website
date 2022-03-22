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
  margin: 284px 180px 432px 208px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 50px;
  font-style: italic;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.2;
  text-align: center;
  color: #ebeded;
}
</style>
