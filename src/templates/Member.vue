<template>
  <Layout>
    <listing></listing>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb d-flex justify-content-start">
        <li class="breadcrumb-item" aria-current="page">
          <g-link to="/members">Membres</g-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $page.member.title}}</li>
      </ol>
    </nav>
    <article class="container">
      <div>
        <h2>{{ $page.member.title }}</h2>
        <g-image :src="$page.member.image"/>
        <div class="content" v-html="$page.member.content" />
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
        title: this.$page.member.title
      }
    }
  }
</script>

<page-query>
  query Member ($path: String!) {
    member (path: $path) {
      title
      content
      image
    }
  }
</page-query>
