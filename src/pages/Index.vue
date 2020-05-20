<template>
  <Layout class="home">
    <listing></listing>
    <div>
      <div>
        <h2>Actualités</h2>
      </div>
      <div class="news" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
        <router-link :to="node.path">
          <g-image :src="node.image"/>
          <h3 v-html="node.title"/>
          <div v-html="node.description"/>
          <span class="publish_date" v-html="node.date"/>
        </router-link>
      </div>
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
  query Home ($page: Int) {
    allBlogPost (page: $page, perPage: 2) {
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
    },
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

<style scoped>
  .home >>> .heading {
    margin-bottom: 70px;
  }

  h3 {
    margin-bottom: 10px;
    color: red;
  }

  span {
    font-size: 80%;
    padding: 0;
  }

  .news {
    max-width: 300px;
    float: left;
    margin: 20px;
  }

  .news img{
    max-width: 300px;
  }
</style>
