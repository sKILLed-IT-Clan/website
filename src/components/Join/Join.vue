<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <h3>{{ joinMsg }}</h3>
    <h5>*Must be 18 Years or Older.*</h5>

    <div class="games">
      <div class="warzone">
        <img src="@/assets/warzone-art.svg" />

        <div class="games__leaders">
          <h4>Director of Call of Duty: Warzone</h4>
          <h6>Casey - <span>NoneYuhhhBiZz#1597</span></h6>

          <h4>Call of Duty: Warzone Competitive Coordinator</h4>
          <h6>Morgan - <span>MisterVortex#5603</span></h6>
        </div>
      </div>
      <span>
        For Assistance, Questions, or Concerns regarding our Warzone or Apex Legends Branches, you may contact the following members via Discord Direct Message.
      </span>
      <div class="apex">
        <img src="@/assets/apex-art.svg" />

        <div class="games__leaders">
          <h4>Director of Apex Legends:</h4>
          <h6>Rodney - <span>icedademonking#4619</span></h6>

          <h4>Apex Legends Competitive Coordinator:</h4>
          <h6>Alex - <span>Swift#9951</span></h6>
        </div>
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
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

.games .warzone img {
  border-radius: 30px;
  border: solid 5px #00c2ff;
}

.games .warzone h4 {
  color: #00c2ff;
  text-decoration: underline;
  margin-bottom: 0;
}

.games .warzone h6 {
  margin: 0 auto;
}

.games .warzone span,
.games .apex span {
  font-style: italic;
  font-weight: 600;
}

.games .apex img {
  border-radius: 30px;
  border: solid 5px #ff0000;
}

.games .apex h4 {
  color: #ff0000;
  text-decoration: underline;
  margin-bottom: 0;
}

.games .apex h6 {
  margin: 0 auto;
}

.games span {
  align-self: start;
  margin-top: 150px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: italic;
  line-height: 1.88;
}

.games__leaders,
.games__leaders h4,
.games__leaders h6,
.games__leaders h6 span {
  font-size: 21px;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
}

.games__leaders h4,
.games__leaders h6 {
  font-weight: 400;
}
</style>
