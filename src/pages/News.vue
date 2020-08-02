<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Actualités</h2>
      <h3>Articles sur l'actualité du club</h3>
      <div class="row d-lg-flex justify-content-around">
        <div class="news col-sm-10 col-lg-5" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <div>
            <p class="publish_date" v-html="node.date"/>
            <g-image class="card-img-top" :src="node.image" />
            <div>
              <router-link :to="node.path">
                <h5 v-html="node.title" />
                <p v-html="node.description" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
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
      title: 'Les actualités du club',
    }
  }
</script>

<page-query>
  query News ($page: Int) {
    allNewsItem (page: $page) {
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
h2, h3 {
  text-align: center;
}

h3 {
  margin-bottom: 2.5rem;
}

h5 {
  margin-top: 0.8rem;
}

a {
  color: black;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.news {
  margin-bottom: 2rem;
}

.publish_date {
  margin-bottom: 1rem;
}
</style>
