<template>
  <Layout>
    <listing></listing>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb d-flex justify-content-start">
        <li class="breadcrumb-item" aria-current="page">
          <g-link to="/news">Actualités</g-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $page.newsItem.title}}</li>
      </ol>
    </nav>
    <article class="container">
      <div>
        <span>{{ $page.newsItem.date }}</span>
        <h2>{{ $page.newsItem.title }}</h2>
        <p>{{ $page.newsItem.description }}</p>
        <g-image :src="$page.newsItem.image"/>
        <div class="content" v-html="$page.newsItem.content" />
      </div>
    </article>
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
    }
  }
</page-query>

<style scoped>
img {
  width: 860px;
  height: 460px;
}

nav {
  background-color: #fff;
}

p {
  margin-bottom: 2rem;
}

.content {
  margin-top: 1.5rem;
}
</style>
