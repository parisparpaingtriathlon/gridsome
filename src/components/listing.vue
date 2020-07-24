<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <g-link class="heading-link" :to="{ name: 'home' }">
            <h1>{{ config.siteName }}</h1>
        </g-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto d-flex justify-content-end">
                <li class="nav-item">
                    <g-link class="nav-link" to="/">Accueil</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/news">Actualités</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/members">Membres</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/calendar">Calendrier des courses</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/results">Résultats</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/contact">Contactez-nous</g-link>
                </li>
            </ul>
        </div>
    </nav>
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

<style scoped>
    ul.navbar-nav {
        width: 100%;
    }
    .navbar {
        background-color: rgba(254, 67, 101, 0.5);
    }
</style>
