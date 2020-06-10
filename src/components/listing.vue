<template>
    <div>
        <ul>
            <li>
                <g-link  to="/">Accueil</g-link>
            </li>
            <li>
                <g-link  to="/members">Membres</g-link>
            </li>
            <li>
                <g-link to="/news">Actualités</g-link>
            </li>
            <li>
                <g-link to="/calendar">Calendrier des courses</g-link>
            </li>
            <li>
                <g-link to="/results">Résultats</g-link>
            </li>
            <li>
                <g-link to="/contact">Contactez-nous</g-link>
            </li>
        </ul>
    </div>
</template>

<page-query>
  query {
    allTag {
      edges {
        node {
          id
          path
        }
      }
    }
  }
</page-query>

<style lang="css" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: red;
    }
</style>
