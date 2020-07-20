<template>
  <Layout>
    <listing></listing>
    <div class="article">
      <h1>{{ $page.newsItem.title }}</h1>
      <span>{{ $page.newsItem.date }}</span>
      <g-image :src="$page.newsItem.image"/>
      <div class="content" v-html="$page.newsItem.content" />
    </div>
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
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>
