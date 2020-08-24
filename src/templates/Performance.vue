<template>
  <Layout>
    <listing></listing>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb d-flex justify-content-start">
        <li class="breadcrumb-item" aria-current="page">
          <g-link class="back-to-members" to="/performances">Voir la liste des performances</g-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $page.performance.title}}</li>
      </ol>
    </nav>
    <article class="container">
      <div>
        <h2>{{ $page.performance.title }}</h2>
        <div>
          <g-image class="member-image" :src="$page.performance.image"/>
          <div class="content" v-html="$page.performance.content" />
        </div>
      </div>
      <div>
        <div v-for="people in $page.performance.peoples" :key="people.slug">
          <router-link :to="people.path">
            {{ people.title }}
          </router-link>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
  import Listing from '~/components/listing';

  export default {
    components: {
      Listing
    },
    metaInfo () {
      return {
        title: this.$page.performance.title
      }
    }
  }
</script>

<page-query>
  query Performance ($path: String!) {
    performance (path: $path) {
      title
      content
      image
      peoples {
        path
        title
        slug
      }
    }
  }
</page-query>

<style scoped>
  .back-to-members {
    color: #000;
  }

  .back-to-members:link {
    text-decoration: underline;
  }

  .back-to-members:visited {
    text-decoration: none;
  }

  .back-to-members:hover {
    color: #FE4365;
  }

  article {
    min-height: 70vh;
  }

  .member-image {
    width: auto;
    height: auto;
    min-width: 260px;
    max-height: 260px;
    float: left;
    margin: 0 32px 13px 0;
    border-radius:50%;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
  }
</style>
