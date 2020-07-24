<template>
  <div class="layout">
    <slot />
    <footer class="container">
      <div class="row">
        <div class="offset-lg-1 col-lg-3">
          <ul>
            <li>Accueil</li>
            <li>Actualités</li>
            <li>Calendrier des courses</li>
            <li>Résultats et performances</li>
          </ul>
        </div>
        <div class="offset-lg-1 col-lg-3">
          <ul>
            <li>Membres</li>
            <li>Nous contacter</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="credits">All rights reserved, built with love by nicoThal + kinedie</p>
      </div>
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
  html {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    min-height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
    font-size: 16px;
    padding-bottom: 11em;
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
    position: absolute;
    bottom: 0;
    font-weight: 600;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", sans-serif;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    margin: 2rem 0;
    color: #FE4365;
    font-weight: 200;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }

  h6 {
    font-size: 20px;
  }

  /* header {
    background-image: url("../../placeholders/banner/simon-connellan-8bv_BtMLU1I-unsplash.jpg");

  } */

  li {
    list-style-type: none;
  }

  p, li {
    font-family: 'Montserrat', sans-serif;
  }

  section {
    padding-bottom: 3rem;
  }

  @media screen and (max-width: 768px) {
    .banner-desktop {
      display: none !important;
    }
    footer {
      display: none !important;
    }
    .heading {
      display: none !important;
    }
  }

  .banner-desktop {
      width: 860px;
      height: 400px;
  }

  .credits {
    text-align: center;
  }

  .heading-link {
    color: #FE4365;
    font-weight: 200;;
  }

  .layout {
    margin-bottom: 50px;
  }

  .heading {
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
  }
</style>
