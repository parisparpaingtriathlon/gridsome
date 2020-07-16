<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav d-flex justify-content-between">
                <li class="nav-item active">
                    <g-link class="nav-link" to="/">Accueil</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/members">Members</g-link>
                </li>
                <li class="nav-item">
                    <g-link class="nav-link" to="/news">Actualités</g-link>
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

<style scoped>
    ul.navbar-nav {
        width: 100%;
    }
</style>
