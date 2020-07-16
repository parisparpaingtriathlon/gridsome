<template>
  <div class="layout">
    <header class="header">
      <g-link class="heading-link" :to="{ name: 'home' }">
        <component :is="titleTag" class="heading">{{ config.siteName }}</component>
      </g-link>
    </header>
    <img src="https://dummyimage.com/860x400/000/fff.jpg&text=PPT+banner" alt="">
    <slot/>
  </div>
</template>

<script>
  import config from '~/.temp/config.js';

  export default {
    computed: {
      titleTag () {
        return this.$route.name === 'home' ? 'h1' : 'h6'
      },
      config () {
        return config
      }
    }
  }
</script>


<style lang="css">
  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
  }

  h1 {
    font-size: 48px;
  }

  h6 {
    font-size: 20px;
  }

  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    font-size: 16px;
    padding: 0;
  }

  .heading-link {
    color: black;
    text-decoration: none;
  }

  .layout {
    max-width: 900px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  .layout {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .heading {
    margin-bottom: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
  }

   .article {
     margin-top: 15px;
   }

  .article h1 {
    font-size: 40px;
  }

  .article img {
    width: 100%;
    border-radius: 5px;
  }

  .article a {
    color: red;
    text-decoration: underline;
  }

  .article a:hover {
    text-decoration: none;
  }

  .article span {
    font-size: 80%;
    margin-bottom: 20px;
  }

  .article ol, .article ul {
    list-style-position: outside;
  }

  .article ul {
    list-style: disc;
    padding-left: 20px;
  }

  .article .content p:first-child {
    margin-top: 15px;
  }

  .article .content p {
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.5;
  }
</style>
