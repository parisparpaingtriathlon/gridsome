<template>
    <Layout>
        <listing></listing>
        <ul>
            <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
                <router-link :to="edge.node.path">
                    <h2 v-html="edge.node.title"/>
                </router-link>
                <span v-html="edge.node.date"/>
                <div v-html="edge.node.description"/>
            </li>
        </ul>
    </Layout>
</template>

<script>
    import Listing from '~/components/listing';

    export default {
        components: {
            Listing
        }
    }
</script>

<page-query>
  query Tag($id: String) {
    tag(id: $id) {
      title
      belongsTo {
        edges {
          node {
            ... on BlogPost {
              id
              title
              date (format: "D MMMM, YYYY")
              description
              path
            }
          }
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
