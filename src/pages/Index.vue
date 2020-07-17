<template>
  <Layout class="home">
    <listing></listing>
    <div class="container">
      <h2>Précédemment, au PPT...</h2>
      <div class="row d-lg-flex justify-content-around">
        <div class="news col-sm-10 col-lg-5 offset-lg-1" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <div class="card">
            <g-image class="card-img-top" :src="node.image" />
            <div class="card-body">
              <h5 class="card-title" v-html="node.title" />
              <p class="card-text" v-html="node.description" />
              <router-link :to="node.path" class="btn btn-primary">Voir plus</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Listing from "~/components/listing";

export default {
  components: {
    Listing
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
h2 {
  margin: 2rem 0;
  color: #FE4365;
  font-weight: 200;
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

.news img {
  max-width: 300px;
}
</style>
