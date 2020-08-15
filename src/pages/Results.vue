<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Performances</h2>
      <h3>Performances du club</h3>
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
      title: 'Performances',
    }
  }
</script>

<style scoped>
h2, h3 {
  text-align: center;
}
</style>
