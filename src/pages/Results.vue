<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Résultats</h2>
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
      title: 'Résultats et performances',
    }
  }
</script>

<style scoped>
h2, h3 {
  text-align: center;
}
</style>
