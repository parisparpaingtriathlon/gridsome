<template>
  <Layout>
    <listing></listing>
    <div class="article">
      <h1>{{ $page.member.title }}</h1>
      <g-image :src="$page.member.image"/>
      <div class="content" v-html="$page.member.content" />
    </div>
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
