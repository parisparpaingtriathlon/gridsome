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
          <h2>{{ $page.newsItem.title }}</h2>
          <p class="news-item-description">{{ $page.newsItem.description }}</p>
          <g-image :src="$page.newsItem.image"/>
          <div class="content" v-html="$page.newsItem.content" />
        </div>
        <div class="col-lg-3">
        <p>Publié le {{ $page.newsItem.date }}</p>
        <p>par Clio</p>
      </div>
      </div>
    </article>
    <section class="container">
      <h3>Autres actualités du Paris Parpaing Triathlon</h3>
      <div class="row">
        <div class="col-lg-4">
          <img />
          <h4>Hello World Paris Parpaing Triathlon</h4>
        </div>
        <div class="offset-lg-2 col-lg-4">
          <img />
          <h4>Hello World Paris Parpaing Triathlon</h4>
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
        title: this.$page.newsItem.title
      }
    }
  }
</script>

<page-query>
  query NewsItem ($path: String!) {
    newsItem (path: $path) {
      title
      description
      date (format: "D MMMM, YYYY", locale: "fr")
      content
      image
      credits
    }
  }
</page-query>

<style scoped>
img {
  width: 100%;
  height: 460px;
}

nav {
  background-color: #fff;
}

.news-item-description {
  margin-bottom: 2rem;
  font-weight: 800;
}

.content {
  margin-top: 1.5rem;
}
</style>
