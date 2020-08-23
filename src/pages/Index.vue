<template>
  <Layout class="home">
    <listing></listing>
    <header class="jumbotron">
      <h1>Bienvenue sur le site officiel du {{ config.siteName }}</h1>
    </header>
    <section class="container">
      <div class="row">
        <div class="col-lg-4">
          <p>Basé dans la capitale, le Paris Parpaing Triathlon a été créé en 2018 par des amatrices et des amateurs de sport.</p>
        </div>
        <div class="col-lg-4">
          <img src="../../logo_fond_transparent.png" height="275px">
          <p style="text-align: center;">"Un pour tous, tous parpaing"</p>
        </div>
        <div class="col-lg-4">
          <p style="text-align: right;">Le club participe à des compétitions dans tout l'Hexagone.</p>
        </div>
      </div>
    </section>
    <section class="container news">
      <h2>Précédemment, au PPT...</h2>
      <div class="row d-lg-flex justify-content-around">
        <div class="single-news col-sm-10 col-lg-6" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <div class="card-body">
            <router-link class="news-preview" :to="node.path">
              <g-image class="card-img-top" :src="node.image" />
              <h5 class="card-title" v-html="node.title" />
            </router-link>
            <!-- <p class="news-preview-date" v-html="node.date"/> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-lg-5 col-lg-4">
          <g-link to="/news">
            <button class="btn-show-more-news">Voir plus d'actualités</button>
          </g-link>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-lg-5">
          <h2>Social PPT</h2>
          <p>Le Paris Parpaing Triathlon, ou PPT, raconte sa légende sur les réseaux sociaux. Retrouvez-nous sur Instagram.</p>
          <a class="social-ppt-link" href="https://www.instagram.com/parisparpaingtriathlon/" target="_blank">
            <div class="social-ppt-img">
              <p class="social-ppt-legend">Le compte Instagram du club <i class="fa fa-external-link" aria-hidden="true"></i></p>
            </div>
          </a>
        </div>
        <div class="col-lg-7">
          <h2>Calendrier des courses et résultats</h2>
          <p></p>
        </div>
      </div>
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

  .single-news {
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
  }

  button {
    border: none;
    font-family: 'Montserrat', sans-serif;
    border-radius: 8px;
    padding: 12px 18px;
    font-size: 16px;
    cursor: pointer;
    border: 1.9px solid #FE4365;
    color: #FE4365;
    background-color: #fff;
    outline: none;
  }

  .btn-show-more-news {
    background-position: center;
    transition: background 0.8s;
  }

  .btn-show-more-news:hover {
    background: #fe7b93 radial-gradient(circle, transparent 1%, #fe7b93 1%) center/15000%;
    color: #fff;
  }

  .btn-show-more-news:active {
    background-color: #fea1b2;
    background-size: 100%;
    transition: background 0s;
  }

  .card-title {
    padding-top: 14px;
  }

  .card-img-top {
    max-width: 500px;
    height: 300px;
    border-radius: 3%;
    -webkit-border-radius:3%;
    -moz-border-radius:3%;
    transition: 0.5s;
  }

  .card-img-top:hover {
    filter: grayscale(1);
  }

  .card-body {
    max-height: 500px;
  }

  .social-ppt-link {
    color: #343a40;
  }

  .social-ppt-link:hover {
    text-decoration: none;
  }

  .social-ppt-img {
    border-radius: 3%;
    background-color: #FE4365;
    height: 300px;
    width: 100%;
  }

  .social-ppt-legend {
    text-align: center;
    white-space: nowrap;
    line-height: 300px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.6rem;
    color: #fff;
    transition: transform .2s;
  }

  .social-ppt-legend:hover {
    transform: scale(1.2);
  }
</style>
