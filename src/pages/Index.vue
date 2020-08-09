<template>
  <Layout class="home">
    <listing></listing>
    <header class="jumbotron">
      <h1>Bienvenue sur le site officiel du {{ config.siteName }}</h1>
    </header>
    <section class="container">
      <h2>Précédemment, au PPT...</h2>
      <div class="row d-lg-flex justify-content-around">
        <div class="news col-sm-10 col-lg-6" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <div>
            <div class="card-body">
              <router-link class="news-preview" :to="node.path">
                <g-image class="card-img-top" :src="node.image" />
                <h5 class="card-title" v-html="node.title" />
              </router-link>
              <p class="news-preview-date" v-html="node.date"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <h2>Calendrier des courses et résultats</h2>
      <p>Consultez le calendrier des courses pour savoir où nous trouver.</p>
      <p>Pour accéder aux performances du club, cliquez ici.</p>
    </section>
    <section class="container members">
      <h2>Membres</h2>
      <p>Découvrez les athlètes derrière la légende du Parpaing.</p>
    </section>
  </Layout>
</template>

<script>
  import config from "~/.temp/config.js";
  import Listing from "~/components/listing";

  export default {
    components: {
      Listing
    },
    computed: {
      config() {
        return config;
      }
    },
    metaInfo: {
      title: 'Accueil',
    }
  };
</script>

<page-query>
  query Home ($page: Int) {
    allNewsItem (page: $page, perPage: 2) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM YYYY", locale: "fr")
          image
          path
        }
      }
    }
  }
</page-query>

<style scoped>
  h1, h5 {
    text-transform: uppercase;
  }

  h1 {
    text-align: center;
  }

  h5 {
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    .jumbotron {
      display: none !important;
    }
  }

  .jumbotron {
    background-image: url('../../placeholders/banner/simon-connellan-mfN2CYfjQz4-unsplash.jpg');
    height: 50vh;
    color: #FE4365;
  }

  .news {
    max-width: 500px;
  }

  .news-preview, .news-preview-date {
    color: black;
  }

  .news-preview:link {
    text-decoration: none;
  }

  .news-preview:visited {
    text-decoration: none;
  }

  .news-preview:hover {
    color: #FE4365;
    /* text-decoration: none; */
  }

  .card-title {
    padding-top: 14px;
  }

  .card-img-top {
    max-width: 500px;
    height: 300px;
    border-radius: 2%;
  }

  .card-img-top:hover {
    filter: grayscale(1);
  }

  .card-body {
    max-height: 500px;
  }

</style>
