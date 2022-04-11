<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <h3>{{ joinMsg }}</h3>
    <h5>*Must be 18 Years or Older.*</h5>

    <div class="games">
      <div class="games__warzone">
        <img src="@/assets/warzone-art.svg" />
      </div>
      <span>
        For Assistance, Questions, or Concerns regarding our Warzone or Apex Legends Branches, you may contact the following members via Discord Direct Message.
      </span>
      <div class="games__apex">
        <img src="@/assets/apex-art.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',

  data () {
    return {
      msg: 'Apply Today to become a sKILLed-IT Member!',
      joinMsg: 'Select the application you would like to complete now!'
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
  grid-template-columns: 1fr;
}

h1 {
  margin: 80px auto;
  -webkit-text-stroke: 0.125px #fff;
  font-family: Audiowide;
  font-size: 42px;
  line-height: 1.43;
  color: #000;
}

h3 {
  font-size: 25px;
  line-height: 1.2;
}

h5 {
  font-size: 16px;
  font-style: italic;
  line-height: 1.88;
}

.games {
  display: flex;
  gap: 20px;
}

.games__warzone {
  border-radius: 30px;
  border: solid 5px #00c2ff;
}

.games__apex {
  border-radius: 30px;
  border: solid 5px #ff0000;
}

.games span {
  align-self: end;
  margin-bottom: 50px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.88;
}
</style>
