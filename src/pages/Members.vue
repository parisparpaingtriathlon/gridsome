<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Membres</h2>
      <h3>Découvrez les membres légendaires du PPT.</h3>
      <ul>
        <li v-for="{ node } in $page.allMember.edges" :key="node._id">
          <router-link :to="node.path">
            <h4 v-html="node.title"/>
          </router-link>
          <div v-html="node.description"/>
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
    }
  }
</script>

<page-query>
  query Members ($page: Int) {
    allMember (page: $page) {
      edges {
        node {
          _id
          title
          description
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
</style>
