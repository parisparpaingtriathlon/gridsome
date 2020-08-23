<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Membres</h2>
      <h3>Découvrez les membres légendaires du PPT.</h3>
      <div class="row">
        <div class="col-md-3 member-item" v-for="{ node } in $page.allMember.edges" :key="node._id">
          <router-link :to="node.path" class="member-link">
            <g-image class="member-image" :src="node.image" />
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
    min-height: 45vh;
  }

  .member-item {
    text-align: center;
    margin-top: 8vh;
  }

  .member-link {
    text-decoration: none;
    color: #343a40;
  }

  .member-link > h4:hover {
    color: #FE4365;
  }

  h4 {
    margin-top: 18px;
  }

  .member-image{
    overflow:hidden;
    -webkit-border-radius:80px;
    -moz-border-radius:80px;
    border-radius:80px;
    width:160px;
    height:160px;
  }

  .member-image:hover {
    filter: grayscale(1);
  }
</style>
