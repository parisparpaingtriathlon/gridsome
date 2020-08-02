import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
  })
  head.script.push({
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
  })
  head.htmlAttrs = { lang: 'fr' }
}
