<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Contactez-nous</h2>
      <h3>Envoyez-nous des mots doux.</h3>
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

<style scoped>
h2, h3 {
  text-align: center;
}
</style>
