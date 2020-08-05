<template>
    <nav class="navbar navbar-expand-md bg-dark sticky-top">
        <button class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapse_target">
            <a class="navbar-brand" href="#">
                <img src="../../logo_fond_transparent.png" height="35px">
            </a>
            <span class="navbar-text heading-title">{{ config.siteName }}</span>
            <ul class="navbar-nav d-flex justify-content-end">
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

    a:hover {
        text-decoration: none;
        color: #FE4365;
    }

    .nav-link {
        color: white;
    }
</style>
