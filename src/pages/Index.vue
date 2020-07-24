<template>
  <Layout class="home">
    <listing></listing>
    <section class="container">
      <h2>Précédemment, au PPT...</h2>
      <div class="row d-lg-flex justify-content-around">
        <div class="news col-sm-10 col-lg-3" v-for="{ node } in $page.allNewsItem.edges" :key="node._id">
          <div>
            <p v-html="node.date"/>
            <g-image class="card-img-top" :src="node.image" />
            <div class="card-body">
              <h5 class="card-title" v-html="node.title" />
              <router-link :to="node.path" class="btn">Voir plus</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container">
      <h2>Calendrier des courses et résultats</h2>
      <p>Consultez le calendrier des courses pour savoir où nous trouver.</p>
      <p>Pour accéder aux performances du club, cliquez ici.</p>
    </section>
    <section class="container members">
      <h2>Membres</h2>
      <p>Découvrez les athlètes derrière la légende du Parpaing.</p>
    </section>
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
    allNewsItem (page: $page, perPage: 3) {
      edges {
        node {
          _id
          title
          date (format: "D MMMM, YYYY")
          image
          path
        }
      }
    }
  }
</page-query>

<style scoped>
 .btn {
    background-color: #FE4365;
    font-family: 'Montserrat', sans-serif;
    margin-top: 1rem;
  }

  .members {
    background-color: rgba(254, 67, 101, 0.6);
  }

  .news {
    max-width: 500px;
  }

  .card-img-top {
    max-width: 500px;
    height: 300px;
  }

  .card-body {
    max-height: 500px;
  }
</style>
