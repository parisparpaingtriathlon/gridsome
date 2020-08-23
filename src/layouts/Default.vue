<template>
  <div class="layout">
    <slot />
    <footer>
        <p class="footer-credits">All rights reserved, built with love by nicoThal + kinedie | contact@parisparpaingtriathlon.com | <a href="#">Mentions légales</a></p>
    </footer>
  </div>
</template>

<script>
  import config from "~/.temp/config.js";

  export default {
    computed: {
      config() {
        return config;
      }
    }
  };
</script>

<style lang="css">
  html, body {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  footer {
    padding-top: 2rem;
    padding-bottom: 1rem;
    bottom: 0;
    background-color: #fff;
    color: #343a40;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
  }

  h2 {
    margin: 2rem 0;
    color: #FE4365;
    font-weight: 200;
    padding-top: 2rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    text-align: center;
  }

  h6 {
    font-size: 20px;
  }

  li {
    list-style-type: none;
  }

  p, li {
    font-family: 'Montserrat', sans-serif;
  }

  section {
    padding-bottom: 3rem;
  }

  .footer-credits {
    text-align: center;
    margin-top: 1rem;
  }
</style>
