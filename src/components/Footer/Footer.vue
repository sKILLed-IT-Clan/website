<template>
  <footer class="footer">
    <div class="container">
      <ul class="menu">
        <li>
          <a href="https://www.facebook.com/skilleditclan" target="_new">
            <img src="@/assets/facebook.svg" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sKILLedITClan" target="_new">
            <img src="@/assets/twitter.svg" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@skilleditclan" target="_new">
            <img src="@/assets/tiktok.svg" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC1qzIaUjgSiXOmjWvPDni7g" target="_new">
            <img src="@/assets/youtube.svg" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 36px 0;
}

@media (min-width: 1024px) {
  .footer {
    padding: 36px;
  }
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
}

.menu > li {
  margin: 0 1rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
}
</style>
