<template>
  <!-- <div> -->
    <nav>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
        <div @click="toggleMenu()" class='menu-button'></div>
      </label>

      <ul class="menu" :class="{active: isActive}">
        <li>
          <router-link @click.native="toggleActive()" to="/about">About Us</router-link>
        </li>
        <li>
          <router-link @click.native="toggleActive()" to="/history">Our History</router-link>
        </li>
        <li>
          <router-link @click.native="toggleActive()" to="/leaders">Meet Our Leaders</router-link>
        </li>
        <li>
          <router-link @click.native="toggleActive()" to="/roster">Competitive Roster</router-link>
        </li>
        <li>
          <router-link @click.native="toggleActive()" to="/join">Join sKILLed-IT</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },

  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
      console.log('menu item clicked ', this)
    },

    toggleActive () {
      this.isActive = !this.isActive
      document.querySelector('.active').classList.toggle('active')
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  nav {
    display: flex;
    margin: 0;
    list-style-type: none;
    gap: 34px;
    justify-content: space-around;
  }
}

li {
  margin: 0 auto;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 25px;
  align-self: center;
}

a {
  color: #fff;
  text-decoration: none;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
  z-index: 1;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0;
  transform: rotate(-405deg);
}

@media (max-width: 1024px) {
  .menu {
    visibility: hidden;
  }

  .menu.active {
    visibility: visible;
  }
}

@media (max-width: 1024px) {
  .menu-button-container {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 0;
    padding-top: 62%;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #222;
  }

  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
  }

  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
</style>
