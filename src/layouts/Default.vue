<template>
  <div class="layout">
    <slot />
    <footer class="container">
      <div class="row footer-listing">
        <div class="offset-lg-5 col-lg-3">
          <ul>
            <li class="footer-nav-item">
              <g-link to="/">Accueil</g-link>
            </li>
            <li class="footer-nav-item">
              <g-link to="/news">Actualités</g-link>
            </li>
            <li class="footer-nav-item">
              <g-link to="/calendar">Calendrier des courses</g-link>
            </li>
            <li class="footer-nav-item">
              <g-link to="/results">Résultats et performances</g-link>
            </li>
          </ul>
        </div>
        <div class="offset-lg-1 col-lg-3">
          <ul>
            <li class="footer-nav-item">
              <g-link to="/members">Membres</g-link>
            </li>
            <li class="footer-nav-item">
              <g-link to="/contact">Nous contacter</g-link>
            </li>
            <li>Suivez-nous sur Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <p class="footer-credits">All rights reserved, built with love by nicoThal + kinedie</p>
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
    padding-bottom: 15em;
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

  .footer-credits {
    text-align: center;
    margin-top: 1rem;
  }

  .heading-link {
    color: #FE4365;
    font-weight: 200;;
  }

  .heading {
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
  }
</style>
