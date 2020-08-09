<template>
  <Layout>
    <listing></listing>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb d-flex justify-content-start">
        <li class="breadcrumb-item" aria-current="page">
          <g-link to="/news">Retour vers la liste des Actualités</g-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $page.newsItem.title}}</li>
      </ol>
    </nav>
    <article class="container">
      <div class="row">
        <div class="col-lg-9">
          <h2 class="news-item-title">{{ $page.newsItem.title }}</h2>
          <p class="news-item-info">par {{ $page.newsItem.author ? $page.newsItem.author : "L'équipe du PPT" }} | publié le {{ $page.newsItem.date }}</p>
          <p class="news-item-description">{{ $page.newsItem.description }}</p>
          <g-image class="news-item-image" :src="$page.newsItem.image" :alt="$page.newsItem.credits"/>
          <div class="news-item-content" v-html="$page.newsItem.content" />
        </div>
        <div class="col-lg-3">
          <img class="ppt-flowers-pattern" src="../../fleurs_fond_transparent.png" alt="Dessin de fleurs rouges à pétales blancs cernés de noir."/>
        </div>
      </div>
    </article>
    <section class="container news-preview">
      <h3 class="news-preview-title">Autres actualités du Paris Parpaing Triathlon</h3>
      <div class="row">
        <div class="col-lg-5" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <router-link :to="node.path">
            <h4 class="news-item-preview-title" v-html="node.title" />
            <g-image class="news-item-preview-img" :src="node.image" />
          </router-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
  import Listing from '~/components/listing';

  export default {
    components: {
      Listing
    },
    metaInfo () {
      return {
        title: this.$page.newsItem.title,
      }
    }
  }
</script>

<page-query>
  query ($path: String!, $page: Int) {
    newsItem (path: $path) {
      title
      description
      date (format: "D MMMM YYYY", locale: "fr")
      content
      image
      credits
      author
    }
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
nav {
  background-color: #fff;
}

article {
  border-bottom: 1px solid black;
  padding-bottom: 5vh;
}

.news-item-title {
  font-size: 2.5rem;
}

.news-item-image {
  width: 100%;
  height: 460px;
  padding: 0 2px;
}

.news-item-description {
  margin: 2.5rem 0;
  font-weight: 800;
}

.news-item-content {
  margin-top: 1.5rem;
}

.news-item-info {
  text-align: center;
}

.news-preview {
  margin-top: 4vh;
}

.news-preview-title {
  text-align: center;
  margin-bottom: 4vh;
}

.news-item-preview-title {
  min-height: 8vh;
}

.news-item-preview-img {
  width: 100%;
  height: 25vh;
  border-radius: 2%;
}

@media screen and (max-width: 768px) {
  .ppt-flowers-pattern {
    display: none !important;
  }
}
</style>
