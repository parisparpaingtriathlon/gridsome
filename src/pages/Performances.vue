<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Performances</h2>
      <h3>Performances du club</h3>
      <ul>
        <li class="container news-list" v-for="{ node } in $page.allPerformance.edges" :key="node._id">
          <div class="row">
            <div class="col-lg-5 news-item">
              <router-link :to="node.path">
                <h4 class="news-item-title" v-html="node.title"/>
                <p v-html="node.description"/>
              </router-link>
            </div>
            <div class="offset-lg-1 col-lg-6">
<!--              <g-image class="news-item-image" :src="node.image" :alt="node.credits" />-->
            </div>
          </div>
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
  import Listing from '~/components/listing';

  export default {
    components: {
      Listing
    },
    metaInfo: {
      title: 'Performances',
    }
  }
</script>

<page-query>
  query Performances ($page: Int) {
    allPerformance (page: $page) {
      edges {
        node {
          _id
          title
          image
          path
          description
        }
      }
    }
  }
</page-query>
<style scoped>
h2, h3 {
  text-align: center;
}
</style>
