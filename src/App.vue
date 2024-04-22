<script>
  import HeaderPage from './components/HeaderPage.vue'
  import MainPage from './components/MainPage.vue'
  import FooterPage from './components/FooterPage.vue'

  export default {
    data(){
      return{
        HeaderLinks: [
          {
              nome: 'Home',
              src: 'www.bellaperte.it'
          },

          {
              nome: 'About',
              src: 'www.bellaperte.it'
          }, 

          {
              nome: 'Academics',
              src: 'www.bellaperte.it'
          },

          {
              nome: 'Courses',
              src: 'www.bellaperte.it'
          },

          {
              nome: 'News',
              src: 'www.bellaperte.it'
          }
        ]
      }
    },

    components: {
      HeaderPage,
      MainPage, 
      FooterPage,
    }
  }
</script>

<template>
  <HeaderPage :HeaderLink="HeaderLinks"/>
  <MainPage />
  <FooterPage />
</template>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

ul, ol, menu {
    list-style: none;
}

img {
    max-width: 100%;
}

a {
    text-decoration: none;
    color: currentColor;
}
</style>
