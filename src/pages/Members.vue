<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Membres</h2>
      <h3>Découvrez les membres légendaires du PPT.</h3>
      <div class="row">
        <div class="col-md-3 members-item" v-for="{ node } in $page.allMember.edges" :key="node._id">
          <router-link :to="node.path">
            <g-image class="members-image" :src="node.image" />
            <h4 v-html="node.title"/>
          </router-link>
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
      title: 'Les membres du club',
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

  .row {
    margin-top: 10vh;
    min-height: 45vh;
  }

  .members-image{
    overflow:hidden;
    -webkit-border-radius:80px;
    -moz-border-radius:80px;
    border-radius:80px;
    width:160px;
    height:160px;
  }

  .members-item {
    text-align: center;
  }

  .members-image:hover {
    filter: grayscale(1);
  }
</style>
