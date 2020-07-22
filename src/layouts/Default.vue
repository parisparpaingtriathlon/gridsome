<template>
  <div class="layout">
    <header>
      <g-link class="heading-link" :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link>
    </header>
    <img class="banner-desktop" src="../../placeholders/banner/simon-connellan-8bv_BtMLU1I-unsplash.jpg">
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
      titleTag() {
        return this.$route.name === "home" ? "h1" : "h6";
        },
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
    max-width: 860px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Raleway", sans-serif;
  }

  h1 {
    font-size: 48px;
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
    padding-bottom: 2rem;
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
    max-width: 900px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .layout {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .heading {
    margin-bottom: 20px;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
  }

  .article {
    margin-top: 15px;
  }

  .article h1 {
    font-size: 40px;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: red;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
