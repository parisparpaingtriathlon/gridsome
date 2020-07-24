<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Calendar</h2>
      <h3>Calendrier des prochaines courses auxquelles le club participera</h3>
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
