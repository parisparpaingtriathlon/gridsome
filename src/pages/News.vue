<template>
  <Layout>
    <listing></listing>
    <h2>Actualités</h2>
    <p>Blog posts sur l'actualité du club</p>
    <div class="news" v-for="{ node } in $page.allNews.edges" :key="node._id">
      <router-link :to="node.path">
        <g-image :src="node.image"  style="max-width: 200px"/>
        <h3 v-html="node.title"/>
        <div v-html="node.description"/>
        <span class="publish_date" v-html="node.date"/>
      </router-link>
    </div>
  </Layout>
</template>

<script>
  import Listing from '~/components/listing';

  export default {
    components: {
      Listing
    }
  }
</script>

<page-query>
  query Members ($page: Int) {
    allNews (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          description
          image
          path
        }
      }
    }
  }
</page-query>
