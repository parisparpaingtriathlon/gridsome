<template>
  <Layout>
    <listing></listing>
    <h2>Calendar</h2>
    <p>Calendrier des prochaines courses auxquelles le club participera</p>
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
