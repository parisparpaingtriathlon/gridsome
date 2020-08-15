<template>
    <nav class="navbar navbar-expand-md bg-dark sticky-top">
        <button class="navbar-toggler navbar-dark" data-toggle="collapse" data-target="#collapse_target">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapse_target">
            <g-link class="navbar-brand club-logo" to="/">
                <img src="../../logo_fond_transparent.png" height="45px">
            </g-link>
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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Courses
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <g-link class="dropdown-item" to="/calendar">Calendrier des courses</g-link>
                        <g-link class="dropdown-item" to="/results">Performances</g-link>
                    </div>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/contact">Contactez-nous</g-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {};
</script>

<style scoped>
    @media screen and (max-width: 768px) {
        .club-logo {
            display: none !important;
        }
    }

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

    .dropdown-item:active, .dropdown-item.active {
        background-color: rgba(254,67,101, 0.8);
        color: #fff;
    }
</style>
