<template>
  <Layout>
    <listing></listing>
    <section class="container">
      <h2>Contactez-nous</h2>
      <h3>Envoyez-nous des mots doux.</h3>
      <form method="post" action="#">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">Entrez votre adresse email :</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" id="inputEmail3">
          </div>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Précisez l'objet de votre message :</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Rejoindre le Paris Parpaing Triathlon</option>
            <option>Nous proposer un partenariat</option>
            <option>Nous envoyer du love</option>
            <option>La réponse D (toute autre raison)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Écrivez votre message :</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
         <div class="form-group row">
        <div class="col-sm-12 validation-button">
          <button type="submit" class="btn btn-outline-secondary btn-md" disabled>Envoyer</button>
        </div>
      </div>
      </form>
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
      title: 'Nous contacter',
    }
  }
</script>

<style scoped>
  h2, h3 {
    text-align: center;
  }

  h3 {
    margin-bottom: 6vh;
  }

  label, option {
    font-family: 'Montserrat', sans-serif;
  }

  .form-group {
    margin-bottom: 5vh;
  }

  .validation-button {
    text-align: center;
  }
</style>
