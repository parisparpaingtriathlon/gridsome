<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Actualités</h2>
      <h3>Des courses. Des trips. Et plein d'autres aventures.</h3>
      <ul>
        <li class="container news-list" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <div class="row">
            <div class="col-lg-5 news-item">
              <router-link :to="node.path">
                <h4 class="news-item-title" v-html="node.title"/>
                <p v-html="node.description"/>
              </router-link>
            </div>
            <div class="offset-lg-1 col-lg-6">
               <g-image class="news-item-image" :src="node.image" :alt="node.credits" />
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
          description
          image
          credits
          path
        }
      }
    }
  }
</page-query>

<style scoped>
h3 {
  margin-bottom: 2.5rem;
  text-align: center;
}

.news-item-title {
  text-transform: uppercase;
}

.news-introduction {
  font-size: 1.5rem;
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

a:hover {
  color: #FE4365;
}

.news-list {
  margin-top: 4rem;
}

.news-item {
  padding-top: 2vh;
}

.news-item-image {
  height: 40vh;
  width: 100%;
  border-radius: 3%;
  -webkit-border-radius:3%;
  -moz-border-radius:3%;
}
</style>
