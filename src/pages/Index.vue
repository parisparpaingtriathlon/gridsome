<template>
  <Layout class="home">
    <listing></listing>
    <div>
      <div>
        <h2>Précédemment, au PPT...</h2>
      </div>
      <div class="d-flex justify-content-between">
        <div class="news" v-for="{ node } in $page.allNews.edges" :key="node._id">
          <div class="card" style="width: 18rem;">
            <g-image class="card-img-top" :src="node.image"/>
            <div class="card-body">
              <h5 class="card-title" v-html="node.title"/>
              <p class="card-text" v-html="node.description"/>
              <router-link :to="node.path" class="btn btn-primary">Voir plus</router-link>
            </div>
          </div>
      </div>
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
    allNews (page: $page, perPage: 2) {
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
